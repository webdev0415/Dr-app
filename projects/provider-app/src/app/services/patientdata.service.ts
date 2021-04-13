import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { forkJoin, of as ObservableOf } from "rxjs";
import {
  catchError,
  concatMap,
  filter,
  first,
  map,
  pluck,
  skip,
  takeUntil,
} from "rxjs/operators";
import { Select, Store } from "@ngxs/store";
import * as R from "ramda";
import { isNil, keysIn, valuesIn, zipObj } from "ramda";

import { StateService } from "services/state.service";
import { LabsApiService } from "../labs/services/labs-api.service";
import { KludgesService } from "./kludges.service";
import { LazyService } from "./lazy.service";
import { OtherdataService } from "./otherdata.service";
import { TreatmentsService } from "../treatments/treatments.service";

import { drugNameMap } from "../../assets/drug-name-map";
import * as DataModel from "common/models/data.model";
import {
  Data,
  Orders,
  PatientAdditionalInformation,
  PhysicalExam,
  PhysicalExamCover,
} from "common/models/data.model";
import { DateTime } from "utils/dateTime";
import { patientDefaultValue, patientsCards } from "static/patient.constants";
import { ServicedataService } from "./servicedata.service";
import { HistoryTypesEnums } from "common/enums";
import { NavigationService } from "./navigation.service";
import { NotificationsService } from "components/notifications/notifications.service";
import {
  DDXRequest,
  IllnessesInformation,
  IllnessesPOSTRequest,
} from "common/interfaces/diagnostic-engine.interface";
import { AddedExamViewModel } from "../common/interfaces/physical-exams.interfaces";
import {
  physicalExamDesc,
  telemedExamPIC,
} from "../physical-exam/physical-exams.constants";
import { ProceduresService } from "../procedures/procedures.service";
import { InitAccordion } from "../components/app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.actions";
import { UserService } from "user/user.service";
import {
  AddSystemsToPanel,
  EditFinding,
  SelectFinding,
} from "../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.actions";
import {
  AdditionalDoctorNotes,
  DDX,
  RawDDXAnalysis,
} from "common/models/additional-doctor-notes.interface";
import { UserRolesEnum } from "../common/enums/user-roles.enum";
import { PhysicalExamPanelState } from "components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.state";
import { MeasurementsMediaService } from "./measurements-media.service";
import { MeasurementsService } from "./measurements.service";
import { PatientDataFacadeService } from "../patient-core/patient-data-facade.service";
import { DiagnosisTabsEnum } from "../common/enums";
import { MedicationData } from "../../../../shared-models/src/public-api";

@Injectable()
export class PatientdataService {
  private Patient: BehaviorSubject<
    DataModel.Data | null | any
  > = new BehaviorSubject<DataModel.Data | null | any>(null);
  private PatientVal: BehaviorSubject<
    DataModel.Data | null | any
  > = new BehaviorSubject<DataModel.Data | null | any>(null);
  private VisitData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private _visitDataContext: BehaviorSubject<
    { [key in keyof Data]: string }
  > = new BehaviorSubject<{ [key in keyof Data]: string }>(null);
  private Summary: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private doctor_id: number = null;
  private updated_at: string = null;
  private initialPhysicalExam: any[] = [];
  private orders: Orders;
  private differentialDiagnosis: BehaviorSubject<DDX> = new BehaviorSubject<DDX>(
    null
  );
  private isPatientLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  telemedPatient: boolean;

  @Select(PhysicalExamPanelState.viewModelExams)
  physicalExamResultViewModel$: Observable<PhysicalExam[]>;

  constructor(
    private stateService: StateService,
    private userService: UserService,
    private kludges: KludgesService,
    private otherDataService: OtherdataService,
    private dateTimeUtils: DateTime,
    private lazyLoader: LazyService,
    private labsService: LabsApiService,
    private proceduresService: ProceduresService,
    private serviceDataService: ServicedataService,
    private navigationService: NavigationService,
    private notificationService: NotificationsService,
    private store: Store,
    private treatmentsService: TreatmentsService,
    private measurementsMediaService: MeasurementsMediaService,
    private measurementsService: MeasurementsService,
    private patientDataService: PatientDataFacadeService
  ) {}

  static createDDXForRequest(ddxKey: string, body: RawDDXAnalysis): DDXRequest {
    return <DDXRequest>{
      icd10_code: ddxKey,
      icd10_name: body.ICDName,
      is_selected: body.isSelected,
      explanation: body.explanation,
      expected_mdcs: body.expectedMDCs,
    };
  }

  public getPatient(): Observable<DataModel.Data> {
    return this.Patient.asObservable();
  }
  public getPatientVal(): Observable<DataModel.Data> {
    return this.PatientVal.asObservable();
  }
  public getPatientLastValue(): DataModel.Data | null {
    return this.Patient.getValue();
  }
  public isPatientLoaded$(): Observable<boolean> {
    return this.isPatientLoaded.asObservable();
  }
  public getVisitData(): Observable<any> {
    return this.VisitData.asObservable();
  }
  public getHPISummary(): Observable<any> {
    return this.Summary.asObservable();
  }
  public setHPISummary(data: { summary: string }): void {
    this.Summary.next(data);
    // TODO: remove when summary will be fully moved to the new core patient-data.service
    this.patientDataService.summary = data.summary;
  }
  public getDifferentialDiagnosis(filterValid = true): Observable<DDX> {
    return this.differentialDiagnosis.asObservable().pipe(
      map((ddx: DDX) => {
        const patient = this.getPatientLastValue();
        if (!filterValid || !patient || !ddx) return ddx;
        else {
          const diagnosticEngine = patient.diagnosticEngine;
          if (
            Object.keys(ddx).some((icdCode) => {
              const DE = diagnosticEngine.find(
                (item) => item.icd10 === icdCode
              );
              return DE && DE.isPrimary && !ddx[icdCode].explanation.length;
            })
          )
            return null;
          return ddx;
        }
      })
    );
  }

  isTelemedicinePatient(): Observable<boolean> {
    return this.stateService.patient
      .getCurrent()
      .pipe(pluck("appointment_data", "is_telemedicine"));
  }

  isPICTelemedicinePatient(): Observable<boolean> {
    return this.stateService.patient.getCurrent().pipe(
      pluck("appointment_data", "is_telemedicine"),
      map((res) => res && this.userService.isPICModeBusiness)
    );
  }

  getPatientData(id) {
    this._visitDataContext.next(null);
    this.Patient.next(null);
    this.PatientVal.next(null);
    this.Summary.next(null);
    // TODO: remove when summary will be fully moved to the new core patient-data.service
    this.patientDataService.summary = null;
    this.measurementsMediaService.setMeasurements(null);
    this.measurementsService.init(null);
    this.isPatientLoaded.next(false);
    forkJoin(
      this.patientDataService.getVisitData(id),
      this.labsService.getOrderedLabs(id)
    ).subscribe(([body, orders]: [Data, Orders]) => {
      this.handleVisitDataContext(body);
      if (!body.patientHealthHistory.historyItem) {
        this.notificationService.error(
          "The patient's data format is not supported.",
          "Unable to open patient."
        );
        this.stateService.patient.getUnassignEvent().emit({
          patient: { patient_id: body.patientInformation.patientId },
          force: true,
          cb: () => this.navigationService.navigateToPatients(),
        });
        return;
      }

      if (!body.patientHealthHistory.historyItem.length) {
        this.stateService.patient.setVisitCreationIssueState(true);
        if (this.userService.getUserRole !== UserRolesEnum.PRACTITIONER)
          this.notificationService.warning("Health history is missing.");
      }

      const cards = {
        idCard: body.patientInformation.idCard,
        insuranceCard: body.patientInformation.insuranceCard,
        // @ts-ignore
        secondaryInsuranceCard: body.patientInformation.secondaryInsuranceCard,
      };

      this.orders = orders;

      this.VisitData.next(body);
      this.getSummary(body);
      this.setUpPatient(body);

      this.lazyLoader
        .lazyLoadMeasurements(body["measurements"])
        .subscribe((loadedMeasurements) =>
          this.measurementsMediaService.setMeasurements(loadedMeasurements)
        );

      this.lazyLoader.lazyLoadIdCards(cards).then((loadedCards) => {
        if (!loadedCards.length) return;
        this.getPatient()
          .pipe(
            first((data) => !!data),
            map((data) => data.patientInformation)
          )
          .subscribe((patientInformation) => {
            patientsCards.forEach((key) => {
              if (patientInformation[key]) {
                patientInformation[key].images = patientInformation[
                  key
                ].images.map((item) => {
                  const blobbedItem = loadedCards.find(
                    (image) => image.side === item.side && image.card === key
                  );
                  return { ...item, fileBlob: blobbedItem.file };
                });
              }
            });
            this.updatePatient({ patientInformation: patientInformation });
          });
      });
    });
    this.measurementsMediaService.getAuditList(id);
  }

  private setUpPatient(patient: DataModel.Data): DataModel.Data {
    const defaultPatient = R.clone(patientDefaultValue);

    if (
      patient.additionalInformation.sportsPhysical &&
      !patient.additionalInformation.sportsPhysical.length
    ) {
      patient.additionalInformation.sportsPhysical =
        defaultPatient.additionalInformation.sportsPhysical;
      Object.assign(
        patient.additionalInformation.sportsCleared,
        defaultPatient.additionalInformation.sportsCleared
      );
    }
    patient.additionalInformation = Object.assign(
      defaultPatient.additionalInformation,
      patient.additionalInformation
    );
    patient.orders = this.orders;
    patient = Object.assign(defaultPatient, patient);

    patient.patientHealthHistory.historyItem
      .filter(
        (item) => item.symptomID === HistoryTypesEnums["MEDICATION-ALLERGIES"]
      )
      .forEach((item) => {
        const medication = (item.historyItem as MedicationData)?.name || "";
        const commonName =
          drugNameMap[medication.toUpperCase()] || medication.toUpperCase();
        patient.additionalInformation.knownDrugAllergies.push({
          conflict: medication,
          potentialDrugs: [commonName],
        });
      });

    patient.patientHealthHistory.historyItem
      .filter((item) => item.symptomID === HistoryTypesEnums.MEDICATION)
      .forEach((item) => {
        const medication = (item.historyItem as MedicationData)?.name || "";
        const commonName =
          drugNameMap[medication.toUpperCase()] || medication.toUpperCase();
        patient.additionalInformation.knownDrugConflicts.push({
          conflict: medication,
          potentialDrugs: [commonName],
        });
      });
    this.getSelectedDiagnosis(patient);

    const patientViewOnly = this.stateService.patient.getLastViewOnly();
    if (patientViewOnly) {
      this.stateService.patient.setExamReviewed(true);
    } else {
      const [images, audio] = [
        this.measurementsMediaService.getMediaByType(
          patient.measurements,
          "images"
        ),
        this.measurementsMediaService.getMediaByType(
          patient.measurements,
          "audio"
        ),
      ];

      // todo: decide what to do with patients those had video, but it was disappear
      if (
        Array.isArray(images) &&
        images.length &&
        images.every((item) => item.data.length)
      )
        images.forEach((item) => {
          if (item.bodyPart.toLowerCase() === "skin") {
            patient.mediaReviewed.Skin = false;
          } else {
            patient.mediaReviewed.ENT = false;
          }
        });

      if (Array.isArray(audio))
        audio.forEach((item) => {
          switch (item.bodyPart) {
            case "heart":
              patient.mediaReviewed.Cardiovascular = false;
              break;
            case "lung":
              patient.mediaReviewed.Respiratory = false;
              break;
            case "abdomen":
              patient.mediaReviewed.GI = false;
              break;
          }
        });
    }

    this.measurementsMediaService.setMeasurements(patient.measurements);
    this.measurementsService.init(patient.measurements);
    this.subscribeToTreatmentsDataUpdate();

    return patient;
  }

  public updatePatient(
    updInfo: Partial<Data>,
    treatmentDirty = false,
    exclude?
  ): Observable<boolean> {
    const patient = this.Patient.getValue();
    updInfo = R.clone(updInfo);
    // todo: remove exclude after main.component refactoring
    if (exclude) updInfo[exclude] = patient[exclude];
    if (patient) {
      this.Patient.next(
        updInfo ? Object.assign({}, this.Patient.getValue(), updInfo) : null
      );
      if (updInfo && updInfo.hasOwnProperty("triage"))
        this.patientDataService.updateVisitData({ triage: updInfo.triage });
      if (updInfo && updInfo.hasOwnProperty("patientHealthHistory"))
        this.patientDataService.updateVisitData({
          patientHealthHistory: updInfo.patientHealthHistory,
        });
      return ObservableOf(true);
    } else {
      return ObservableOf(false);
    }
  }

  public getPatientIllness(): {
    [key in "illness" | "illnessName"]: string[];
  } & { primary: string } {
    const illness = [];
    const illnessName = [];
    let primary: string;
    this.Patient.getValue().diagnosticEngine.forEach((de) => {
      if (de.isSelected) {
        illness.push(de.icd10);
        illnessName.push(de.icdName);
        if (de.isPrimary) primary = de.icd10;
      }
    });
    return { illness: illness, illnessName: illnessName, primary: primary };
  }

  private getMedications(id: string) {
    const proceduresSub = this.proceduresService
      .getProcedures("medications")
      .subscribe((response) => {
        const patient = this.getPatientLastValue();
        patient.medications = response;
        if (proceduresSub) proceduresSub.unsubscribe();
        this.Patient.next(patient);
        this.PatientVal.next(patient);
      });
  }

  private getInjections(id: string) {
    const proceduresSub = this.proceduresService
      .getProcedures("injections")
      .subscribe((response) => {
        const patient = this.getPatientLastValue();
        patient.injections = response;
        if (proceduresSub) proceduresSub.unsubscribe();
        this.Patient.next(patient);
        this.PatientVal.next(patient);
      });
  }

  refreshPhysicalExam(examType: string) {
    this.getPhysicalExams(
      this.patientDataService.patientId.toString(),
      examType
    );
  }

  private getPhysicalExams(id: string, examType?: string) {
    // Logic to check the Exam type and if the business is PIC
    const isPIC = this.userService.isPICModeBusiness;
    this.isTelemedicinePatient().subscribe((value) => {
      this.telemedPatient = value;
    });
    const physicalExamsSub = this.kludges
      .getPhysicalExams(id)
      .subscribe((data: PhysicalExamCover) => {
        if (!data) return;
        const patient = this.getPatientLastValue();
        const results = [];
        this.doctor_id = null;
        this.updated_at = null;

        try {
          if (data.doctor_id !== null) this.doctor_id = data.doctor_id;
          if (data.updated_at !== null) this.updated_at = data.updated_at;
          data.items.forEach((exam) => {
            let examFound = results.find(
              (item) => item.examName === exam.examName
            );
            if (!examFound) {
              examFound = {
                examName: exam.examName,
                examResults: "",
                prevLength: null,
                addedExams: [],
              };
              results.push(examFound);
            }

            R.sort((a, b) => a.left - b.left, exam.addedExams).forEach(
              (item) => {
                const normal = item.modifier.split(",")[0] === "Normal";
                const examFinding = item.modifier.replace(
                  normal ? "Normal, " : "Abnormal, ",
                  ""
                );
                const foundedSystem = (this.userService.isPICModeBusiness &&
                this.telemedPatient
                  ? telemedExamPIC
                  : physicalExamDesc
                ).find((desc) => desc.examName === exam.examName);
                const foundedSubsystem = foundedSystem
                  ? foundedSystem.descriptionsArray.find(
                      (desc) => desc.description === exam.examResults
                    )
                  : undefined;
                const PEDElement = foundedSubsystem
                  ? foundedSubsystem.mod.find((mod) => mod.key === examFinding)
                  : undefined;
                if (PEDElement) {
                  const newExam: AddedExamViewModel = {
                    description: exam.examResults,
                    modifier: {
                      key: examFinding,
                      normal: normal,
                      text: item.description,
                      code: PEDElement.code,
                    },
                    left: item.left,
                    right: item.right,
                    edited: item.edited,
                  };
                  examFound.addedExams.push(newExam);
                  if (examFound.examResults.length) {
                    examFound.examResults = `${examFound.examResults} ${newExam.modifier.text}`;
                  } else {
                    examFound.examResults = newExam.modifier.text;
                  }
                  examFound.prevLength = examFound.examResults.length;
                }
              }
            );
          });
          patient.additionalInformation.physicalExam = results;

          // Determines which Physical Exam to load - This is a band-aid and will need to be solved more elegantly

          if (this.userService.isPICModeBusiness && this.telemedPatient) {
            this.store.dispatch(
              new AddSystemsToPanel(
                telemedExamPIC
                  .filter(
                    (item) =>
                      item.examName !==
                      (patient.patientInformation.gender === "Male"
                        ? "Female GU"
                        : "Male GU")
                  )
                  .map((item) => {
                    const system = R.clone(item);
                    system.descriptionsArray = system.descriptionsArray.map(
                      (desc) => {
                        desc.mod = desc.mod.map((mod) =>
                          Object.assign(mod, { edited: false, selected: false })
                        );
                        return Object.assign(desc, {
                          edited: false,
                          selected: false,
                        });
                      }
                    );
                    return system;
                  })
              )
            );
          } else {
            this.store.dispatch(
              new AddSystemsToPanel(
                physicalExamDesc
                  .filter(
                    (item) =>
                      item.examName !==
                      (patient.patientInformation.gender === "Male"
                        ? "Female GU"
                        : "Male GU")
                  )
                  .map((item) => {
                    const system = R.clone(item);
                    system.descriptionsArray = system.descriptionsArray.map(
                      (desc) => {
                        desc.mod = desc.mod.map((mod) =>
                          Object.assign(mod, { edited: false, selected: false })
                        );
                        return Object.assign(desc, {
                          edited: false,
                          selected: false,
                        });
                      }
                    );
                    return system;
                  })
              )
            );
          }
          results.forEach((physicalExams: PhysicalExam) => {
            physicalExams.addedExams.forEach((exam) => {
              this.store.dispatch(
                new SelectFinding(
                  { key: exam.modifier.key },
                  physicalExams.examName,
                  exam.description,
                  true
                )
              );
              if (exam.edited)
                this.store.dispatch(
                  new EditFinding(
                    { text: exam.modifier.text, key: exam.modifier.key },
                    physicalExams.examName,
                    exam.description
                  )
                );
            });
          });

          patient.mediaReviewed.Edited = !results.length;
          this.physicalExamResultViewModel$
            .pipe(first())
            .subscribe((physicalExams: PhysicalExam[]) =>
              this.setInitialPhysicalExams(physicalExams)
            );

          let allReviewed = true;
          const difference = DateTime.diff(
            new Date(),
            new Date(this.updated_at)
          );
          for (const exam in patient.mediaReviewed) {
            if (
              this.updated_at !== null &&
              this.doctor_id !== null &&
              this.doctor_id === this.userService.getUserData.doctor_id &&
              difference.hours <= 24
            ) {
              patient.mediaReviewed[exam] = true;
            } else {
              if (!patient.mediaReviewed[exam]) allReviewed = false;
            }
          }

          this.stateService.patient.setExamReviewed(allReviewed);
        } catch (e) {
          patient.additionalInformation.physicalExam = [];
        }

        this.PatientVal.next(patient);
        this.Patient.next(patient);
        if (physicalExamsSub) physicalExamsSub.unsubscribe();
      });
  }

  private getSelectedDiagnosis(patient: DataModel.Data) {
    const continueSetupProcess = (patientData: DataModel.Data) => {
      this.getPhysicalExams(patientData.patientInformation.patientId);
      this.getMedications(patientData.patientInformation.patientId);
      this.getInjections(patientData.patientInformation.patientId);
    };

    const parseIllnesses = (illnesses: IllnessesInformation) => {
      if (
        !illnesses.is_edited_by_doctor &&
        R.isNil(patient.additionalInformation.definedIcdCodes)
      ) {
        patient.additionalInformation.definedIcdCodes = [];
      }
      illnesses.is_edited_by_doctor = true;
      illnesses.selected_illnesses.forEach((item) => {
        const DE = [
          ...patient.diagnosticEngine,
          ...patient.unlikelyDiagnosticEngine,
        ];
        const diagnosis = DE.find((diag) => diag.icd10 === item.icd10_code);
        if (diagnosis) {
          diagnosis.isSelected = true;
          diagnosis.icdName = item.icd10_name;
          diagnosis.workupPlanned = item.workup_planned;
        } else {
          patient.diagnosticEngine.push({
            confidence: null,
            contributors: [],
            icd10: item.icd10_code,
            icdGroup: "Doctor added",
            icdName: item.icd10_name,
            iCriticality: 0,
            isSelected: true,
            isPrimary: false,
            source: "",
            groupRanking: 6,
            workupPlanned: item.workup_planned,
          });
        }
      });

      patient.illnessInformation = illnesses;
      this.Patient.next(patient);
      this.PatientVal.next(patient);

      if (this.userService.getUserRole === UserRolesEnum.PHARMACIST)
        this.stateService.patient.tabs.setWorkingDiagnosis(
          DiagnosisTabsEnum.PHARMACIST_SUMMARY
        );

      setTimeout(() =>
        this.store
          .dispatch(
            new InitAccordion(
              [
                ...patient.diagnosticEngine,
                ...patient.unlikelyDiagnosticEngine.map((item) => ({
                  ...item,
                  source: "UnlikelyDiagnosisToConsider",
                })),
              ],
              patient.illnessInformation,
              patient.triage
            )
          )
          .subscribe(() => {
            this.treatmentsService
              .restoreTreatments(
                patient,
                this.getPatientIllness().illness,
                this.getPatientIllness().primary
              )
              .then(() => this.isPatientLoaded.next(true));
          })
      );

      continueSetupProcess(patient);
    };
    this.kludges
      .getSelectedDiagnosis(patient.patientInformation.patientId)
      .subscribe((illnessesInformation: IllnessesInformation) => {
        if (!illnessesInformation) return;
        parseIllnesses(illnessesInformation);
      });
  }

  private subscribeToTreatmentsDataUpdate(): void {
    this.treatmentsService
      .observe((treatmentsState) => {
        const patient = this.getPatientLastValue();
        if (!patient) return;
        const additionalInformation: PatientAdditionalInformation = {
          ...patient.additionalInformation,
          knownDrugConflicts:
            treatmentsState.drugConflictInformation.knownDrugConflicts,
          knownDrugAllergies:
            treatmentsState.drugConflictInformation.knownDrugAllergies,
          knownPrecautionConflicts:
            treatmentsState.drugConflictInformation.knownPrecautionConflicts,
        };
        return {
          treatmentEngine: treatmentsState.patientTreatments,
          drugInformation: treatmentsState.drugInformation.map((item) => {
            item.drugName = item.drugName.toLowerCase();
            return item;
          }),
          additionalInformation: additionalInformation,
          treatmentsDirty: treatmentsState.treatmentsDirty,
        };
      })
      .pipe(
        takeUntil(
          this.getPatient().pipe(
            skip(1),
            first((data) => {
              return data === null;
            })
          )
        ),
        filter((treatmentsState) => !!treatmentsState)
      )
      .subscribe((result) =>
        this.updatePatient(result, result.treatmentsDirty)
      );
  }

  private getSummary(data: Data) {
    const patient_id = data.patientInformation.patientId;
    this.kludges
      .getSummary(patient_id)
      .pipe(
        catchError(() => ObservableOf({ summary: "", doctor: null })),
        concatMap((response) => {
          if (response.summary.length) return ObservableOf(response);
          else
            return this.userService.getUserRole ===
              UserRolesEnum.PRACTITIONER ||
              this.userService.getUserRole === UserRolesEnum.PHARMACIST
              ? this.kludges
                  .generateSummary(data)
                  .pipe(catchError(() => ObservableOf({ summary: "" })))
              : ObservableOf({
                  summary: "",
                  doctor: null,
                });
        })
      )
      .subscribe((result: { summary: string; doctor: number }) => {
        // TODO: remove when summary will be fully moved to the new core patient-data.service
        this.patientDataService.summary = result.summary;
        this.Summary.next(result);
      });
  }

  public saveSummary(data: { summary: string }, patient_id): Observable<any> {
    return this.kludges.saveSummary(data, patient_id);
  }

  public rerunTriage(symptoms, id, rerun_hpi, rerun_ros): Observable<any> {
    return this.kludges.rerunTriage(symptoms, id, rerun_hpi, rerun_ros);
  }

  public updateDifferentialDiagnosis(generateDDX = true): void {
    if (generateDDX) {
      this.kludges
        .getDifferentialDiagnosis()
        .pipe(
          map((ddx) =>
            R.isEmpty(ddx)
              ? { DDXRawAnalysis: {}, DDXCount: null, DDXSummary: "" }
              : ddx
          ),
          catchError(() =>
            ObservableOf({ DDXRawAnalysis: {}, DDXCount: null, DDXSummary: "" })
          )
        )
        .subscribe((ddx) => {
          this.differentialDiagnosis.next(
            R.isEmpty(ddx.DDXSummary) ? null : ddx
          );
        });
    } else {
      this.differentialDiagnosis.next(null);
    }
  }

  public removeLabs(symptoms: string[], id) {
    return this.kludges.removeLabs(symptoms, id);
  }

  public saveHealthHistory(
    patient_id: string,
    update: boolean
  ): Observable<any> {
    const patient = this.getPatientLastValue();
    return this.kludges.saveHealthHistory(patient_id, patient, update);
  }

  public closePatient(
    patient_id: string,
    data: any
  ): Observable<{ detail: string }> {
    return this.kludges.closePatient(patient_id, data);
  }

  public saveAdditionalInfo(
    patient_id: string,
    additionalInfo: AdditionalDoctorNotes,
    update: boolean
  ): Observable<any> {
    return this.kludges.saveAdditionalInfo(patient_id, additionalInfo, update);
  }

  public getPaymentInfo(patient_id: number | string): Observable<any> {
    return this.kludges.getPaymentInfo(patient_id);
  }

  public putVitals(patient_id: number | string, data: any): Observable<any> {
    return this.kludges.putVitals(patient_id, data);
  }

  public viewFinalNotes(patient_id: number | string): Observable<any> {
    return this.kludges.viewFinalNotes(patient_id);
  }

  public saveDiagnosis(data: IllnessesPOSTRequest, id): Observable<any> {
    return this.kludges.saveDiagnosis(data, id);
  }

  public setInitialPhysicalExams(physicalExams: PhysicalExam[]): void {
    this.initialPhysicalExam = physicalExams;
  }

  public getInitialPhysicalExams(): PhysicalExam[] {
    return this.initialPhysicalExam;
  }

  public get ordersState(): Orders {
    return this.Patient.getValue().orders;
  }

  private handleVisitDataContext(visitData: Data): void {
    const contextData = zipObj(
      keysIn(visitData),
      valuesIn(visitData).map((field) => {
        if (typeof field !== "object") return typeof field;
        switch (true) {
          case Array.isArray(field):
            return "array";
          case isNil(field):
            return "null";
          default:
            return "object";
        }
      })
    );
    // @ts-ignore
    this._visitDataContext.next(contextData);
  }

  public get visitDataContext() {
    return this._visitDataContext.getValue();
  }
}
