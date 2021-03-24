import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { OrderStateEnum } from 'common/enums';
import { OtherInformationEnum } from 'common/enums/patient-other-information.enum';
import { SymptomTypesEnum } from 'common/enums/symptom-types.enum';
import { DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';
import { DocumentTreatment, ROSGroup, ROSSymptom } from 'common/interfaces/documents.interface';
import { Injection, Medication } from 'common/interfaces/procedures.interface';
import { ParsedSymptom, SymptomCategory } from 'common/interfaces/symptoms.interface';
import { DDX } from 'common/models/additional-doctor-notes.interface';
import { Data, DischargeNotes, PatientAdditionalInformation } from 'common/models/data.model';
import { ImmunizationByHistoryType } from 'common/models/healthHistory.model';
import { Vitals } from 'common/models/vitals.model';
import { HpiSummaryComponent } from 'components/shared/hpi-summary/hpi-summary.component';

import { SeverityConfirmationInterface } from 'components/shared/popups/pp-severity-confirmation/severity-confirmation.interface';
import { ReturnToSchoolWork } from 'discharge/discharge.interface';
import { PatientDataFacadeService } from 'patient-core/patient-data-facade.service';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';

import * as R from 'ramda';
import { Observable } from 'rxjs';
import { MeasurementsMediaService } from 'services/measurements-media.service';
import { measurementTypes } from 'static/measurement-types.constant';
import { TreatmentTypesEnum } from 'treatments/enum/treatment-types.enum';
import { PrescribingItem } from 'treatments/prescription/prescription.component';
import { treatmentsOrderForFinalNotes } from 'treatments/static/static.treatments';
import { DME } from 'treatments/treatments.new.interface';
import { NewTreatmentsService } from 'treatments/treatments.new.service';
import { TreatmentsService } from 'treatments/treatments.service';


import { UserService } from 'user/user.service';
import { isSymptomPresenting } from 'utils/symptoms';
import { DocumentsService } from '../../../../../projects/provider-documents/src/lib/services/documents.service';
import { HistoryTypesEnums } from '../../../../pharmacist/src/lib/side-models/common/enums/history-types.enum';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { Triage } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { AuditMeasurementsTypes } from '../../../../pharmacist/src/lib/side-models/common/types/audit-measurement.type';
import { SocialCard } from '../../../../pharmacist/src/lib/side-models/patient-profile/social-card.model';
import { symptomSourceExcluded } from '../../../../provider-app/src/app/components/app/workspace/patientspace/constants/symptom-excluded-sources.static';
import { staticLabs } from '../../../../provider-app/src/app/labs/static/labs.static';


@Component({
  selector: 'doc-final-notes',
  templateUrl: './final-notes.component.html',
  styleUrls: ['./final-notes.component.scss']
})
export class FinalNotesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(HpiSummaryComponent) hpiSummary: HpiSummaryComponent;
  @Input() patient: Data;
  @Input() patientListEntity: PatientListEntity;
  @Input() vitals: Vitals;
  @Input() parsedSymptoms: ParsedSymptom[];
  @Input() symptomCategories: SymptomCategory[];
  @Input() showIllnesses: boolean;
  @Input() ddx: DDX;
  @Input() RTWSInfo: { data: ReturnToSchoolWork, isUsed: boolean };
  @Input() dischargeNotes: DischargeNotes;

  public data: any;
  public sections = {
    personalHistory: {
      name: 'Personal History',
      data: [],
      list: [],
      otherInfo: { prefix: ' Cancer - OTHER |', data: '' }
    },
    familyHistory: {
      name: 'Family History',
      data: [],
      list: [],
      otherInfo: { prefix: ' Cancer - OTHER |', data: '' }
    },
    patientSurgicalHistory: {
      name: 'Surgical History',
      data: [],
      list: [],
      otherInfo: { prefix: ' OTHER |', data: '' }
    },
    medications: {
      name: 'Medications',
      data: [],
      otherInfo: { prefix: 'OTHER |', data: '' }
    },
    drugAllergies: {
      name: 'Drug Allergies',
      data: [],
      otherInfo: { prefix: 'OTHER |', data: '' }
    },
    nonDrugAllergies: {
      name: 'Non Drug Allergies',
      data: [],
      list: []
    },
    immunizations: {
      name: 'Immunizations',
      data: [],
      list: []
    }
  };
  public severityConfirmation: Observable<SeverityConfirmationInterface>;
  public socialCard: SocialCard;
  public HPI: { presenting: Triage[]; notPresenting: Triage[] } = {
    presenting: [],
    notPresenting: []
  };
  public vitalss = {
    BP: [],
    PULSE: [],
    BLOOD_OXYGEN: [],
    MEAN_ARTERIAL_PRESSURE: [],
    WEIGHT: [],
    TEMPERATURE: [],
    HEIGHT: [],
    RESPIRATORY_RATE: []
  };
  public labs = [];
  public illnesses: DiagnosticEngine[] = [];
  public primaryDiagnosis: DiagnosticEngine;
  public filteredIllnesses: DiagnosticEngine[] = [];
  public treatments: DocumentTreatment[];
  public ROS: ROSGroup[] = [];
  public media: Measurement[] = [];
  public labsSymptomIds: string[] = R.uniq(R.flatten(staticLabs.map(item => item.ids)));
  public measureSymptoms = [];
  public procedures = [];
  public injections: Injection[] = [];
  public medications: Medication[] = [];
  public locationTimezone = this.userService.getUserData.environment.location_tz;
  public additionalInformation: PatientAdditionalInformation = { };
  public treatmentTypes = TreatmentTypesEnum;
  public rxPrescribingItems: PrescribingItem[] = [];
  public dmes: DME[] = [];

  private validCategories: string[] = [];
  private measurementsSub$: any;

  private symptomSourceExcluded = symptomSourceExcluded;

  constructor(private patientDataService: PatientDataFacadeService,
              private measurementsMediaService: MeasurementsMediaService,
              private userService: UserService,
              private treatmentsService: TreatmentsService,
              private newTreatmentService: NewTreatmentsService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.symptomCategories
      .filter(
        category => !['Measurements', 'Labs'].includes(category.groupName)
      )
      .forEach(
        cat =>
          (this.validCategories = this.validCategories.concat(cat.categoryID))
      );
    const invalidCategories = [
      'SYMPTCG14',
      'SYMPTCG22',
      'SYMPTCG24',
      'SYMPTCG26',
      'SYMPTCG01'
    ];
    const triage: Triage[] = this.patient.triage.filter((item: Triage) => {
      if (this.symptomSourceExcluded(item.symptomSource)) {
        return false;
      }
      const parsedSymptom = this.parsedSymptoms.find(
        symptom => item.symptomId === symptom.symptomID
      );
      if (!parsedSymptom.hasOwnProperty('categoryID')) {
        const symptomCategory = this.getSymptomCategory(
          parsedSymptom.symptomID
        );
        if (!invalidCategories.includes(symptomCategory)) {
          return this.validCategories.includes(symptomCategory);
        }
      } else {
        if (!invalidCategories.includes(parsedSymptom.categoryID)) {
          return this.validCategories.includes(parsedSymptom.categoryID);
        }
      }
      return false;
    });

    Object.keys(measurementTypes).forEach(key => {
      this.measureSymptoms.push(key);
    });
    this.HPI.presenting = R.sort(
      R.ascend(R.prop('symptomName')),
      R.uniqBy(
        item => item.symptomName,
        triage
          .filter(item => isSymptomPresenting(item))
          .filter(item => !this.labsSymptomIds.includes(item.symptomId))
          .filter(item => !this.measureSymptoms.includes(item.symptomName))
      )
    );
    this.HPI.notPresenting = R.sort(
      R.ascend(R.prop('symptomName')),
      R.uniqBy(
        item => item.symptomName,
        triage
          .filter(item => !isSymptomPresenting(item))
          .filter(item => !this.labsSymptomIds.includes(item.symptomId))
          .filter(item => !this.measureSymptoms.includes(item.symptomName))
      )
    );

    this.patientDataService.socialCard$.subscribe(card => this.socialCard = card);

    this.patient.additionalInformation.physicalExam = R.sort(
      R.ascend(R.prop('examName')),
      this.patient.additionalInformation.physicalExam
    );
    if (this.patient.additionalInformation) {
      this.additionalInformation.medicationInstructions = this.patient.additionalInformation['medicationInstructions']
        ? this.patient.additionalInformation['medicationInstructions'].replace(/[^\x00-\x7F]/g, '')
        : this.patient.additionalInformation['medicationInstructions'];
      this.additionalInformation.treatmentDoctorNotes = this.patient.additionalInformation['treatmentDoctorNotes']
        ? this.patient.additionalInformation['treatmentDoctorNotes'].replace(/[^\x00-\x7F]/g, '')
        : this.patient.additionalInformation['treatmentDoctorNotes'];
    }

    this.labs = this.patient.triage
      .filter(item => item.symptomGroup.toLowerCase() === 'labs')
      .map(item => {
        item.symptomName = item.symptomName.replace(/(Positive|Negative)/, '').trim();
        return {
          name: item.symptomName,
          value:
            item.values.length && item.values[0] && item.values[0].length
              ? item.values[0][0]
              : null
        };
      });

    this.illnesses = R.sort(
      R.ascend(R.prop('icd10')),
      this.patient.diagnosticEngine
        .filter(item => item.isSelected)
        .map(item => {
          item.contributors = item.contributors.filter(
            contr => contr.contribution > 0
          );
          return item;
        })
    );

    if (this.showIllnesses) {
      this.primaryDiagnosis = this.illnesses.find(item => item.isPrimary);
      this.filteredIllnesses = this.illnesses.filter(
        item => item.icd10 !== this.primaryDiagnosis.icd10
      );
    }
    this.severityConfirmation = this.patientDataService.severityConfirmation$;
    this.measurementsSub$ = this.measurementsMediaService.getMeasurements().subscribe(measurements => this.media = measurements );
    this.prepareTreatments();
    this.prepareHistory();
    this.prepareReviewOfSymptoms();
    this.getCompletedProcedures();
  }

  ngAfterViewInit(): void {
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.measurementsSub$) {
      this.measurementsSub$.unsubscribe();
    }
    if (this.hpiSummary && this.hpiSummary.isEditable) {
      this.hpiSummary.showNotSavedWarning();
    }
  }

  public get images(): Measurement[] {
    const videoMatch = /^(?!.*[.]webm$).*$/;
    const images: Measurement[] = [];
    const imageSource = this.media ? this.media : this.patient.measurements;
    imageSource.forEach(item => {
      if (
        item.measureType === 'OTOSCOPE' &&
        item.value &&
        item.value.fileName &&
        item.value.fileType.match(videoMatch) &&
        !images.find(file => file.value.bodyPart === item.value.bodyPart && file.value.bodySide === item.value.bodySide)
      ) {
        images.push(item);
      }
    });
    return images;
  }

  get drugUser(): boolean {
    return Boolean(
      this.patient.patientHealthHistory.historyItem.find(
        item => item.symptomID === HistoryTypesEnums['DRUG-USER']
      )
    );
  }

  private prepareTreatments(): void {
    this.treatments = DocumentsService.prepareTreatmentsForDocuments(this.patient, treatmentsOrderForFinalNotes);
    this.rxPrescribingItems = this.newTreatmentService.selectedPrescribingItems;
    this.dmes = this.newTreatmentService.selectedDmes;
  }

  private prepareHistory(): void {
    this.sections.personalHistory.list = this.parsedSymptoms.filter(
      item =>
        item['categoryID'] === HistoryTypesEnums.PERSONAL &&
        item.symptomID !== HistoryTypesEnums['PREVIOUS-HISTORY'] &&
        item.symptomID !== HistoryTypesEnums.ALLERGIES
    );
    this.sections.familyHistory.list = this.parsedSymptoms.filter(
      item => item['categoryID'] === HistoryTypesEnums.FAMILY
    );
    this.sections.patientSurgicalHistory.list = this.parsedSymptoms.filter(
      item => item['categoryID'] === HistoryTypesEnums.SURGICAL
    );
    const filtered = this.parsedSymptoms.filter(
      item => item.symptomID === HistoryTypesEnums.ALLERGIES
    );
    this.sections.nonDrugAllergies.list =
      filtered && filtered[0]
        ? filtered[0].snomedCodes.filter(item => item.listValue)
        : [];
    Object.keys(this.sections).forEach(key => {
      const section = this.sections[key];

      if (
        ![
          'drugAllergies',
          'medications',
          'nonDrugAllergies',
          'immunizations'
        ].includes(key)
      ) {
        section.data = this.patient.patientHealthHistory.historyItem.filter(
          item =>
            item.historyValue !== false &&
            section.list.find(listItem => listItem.symptomID === item.symptomID)
        );
      } else {
        let symptomID = '';
        switch (key) {
          case 'drugAllergies':
            symptomID = HistoryTypesEnums['MEDICATION-ALLERGIES'];
            break;
          case 'medications':
            symptomID = HistoryTypesEnums.MEDICATION;
            break;
          case 'nonDrugAllergies':
            symptomID = HistoryTypesEnums.ALLERGIES;
            break;
          case 'immunizations':
            symptomID = HistoryTypesEnums.IMMUNIZATIONS;
            break;
        }
        section.data = this.patient.patientHealthHistory.historyItem.filter(
          item => item.symptomID === symptomID && item.historyValue !== false
        );
      }

      const otherInfoKey = OtherInformationEnum[section.name];
      if (this.patient.patientHealthHistory[otherInfoKey])
        section.otherInfo.data = this.patient.patientHealthHistory[
          otherInfoKey
        ];
    });
  }
  public getCupsOfCaffeine(): string {
    return R.isEmpty(this.socialCard.caffeineConsumptionReport)
      ? 'Patient does not report consuming caffeine.'
      : this.socialCard.caffeineConsumptionReport;
  }

  private prepareReviewOfSymptoms(): void {
    const ROSSymptoms: ROSSymptom[] = [];
    const symptoms = R.uniqBy(R.prop('symptomName'), this.patient.triage.filter(symptom => !this.symptomSourceExcluded(symptom.symptomSource)));
    symptoms.forEach((item: Triage) => {
      const parsedSymptom = R.clone(
        this.parsedSymptoms.find(
          symptom => item.symptomId === symptom.symptomID
        )
      );
      const isPainSwelling =
        item.symptomGroup === SymptomTypesEnum.PAIN_SWELLING_GROUP;
      const isBasic = parsedSymptom.name
        .toLowerCase()
        .includes(SymptomTypesEnum.BASIC);

      if (
        (item.symptomName.toLowerCase().includes('itch') ||
          (isPainSwelling && isBasic)) &&
        !(
          parsedSymptom.logicalGroupNames &&
          parsedSymptom.logicalGroupNames.some(
            group => group.indexOf('ROS-C') > -1
          )
        ) &&
        !(
          parsedSymptom.logicalGroupNames &&
          parsedSymptom.logicalGroupNames.includes('ROS-C-Musculoskeletal')
        )
      )
        ROSSymptoms.push(
          Object.assign(item, { logicalGroupName: 'ROS-C-Musculoskeletal' })
        );

      if (
        parsedSymptom.logicalGroupNames &&
        parsedSymptom.logicalGroupNames.length
      ) {
        parsedSymptom.logicalGroupNames.forEach((logicalGroupName: string) => {
          if (logicalGroupName.includes('ROS-C')) {
            ROSSymptoms.push(
              Object.assign(item, { logicalGroupName: logicalGroupName })
            );
          }
        });
      }
    });

    const ROSGroups = R.compose(
      // @ts-ignore
      R.groupBy(R.prop('logicalGroupName')),
      R.sortBy(R.prop('logicalGroupName'))
    )(ROSSymptoms);

    Object.keys(ROSGroups).forEach(key => {
      let group: ROSGroup = this.ROS.find(item => item.groupName === key);
      if (!group) {
        group = { groupName: key, presenting: [], notPresenting: [] };
        this.ROS.push(group);
      }
      ROSGroups[key].forEach((item: ROSSymptom) => {
        isSymptomPresenting(item)
          ? group.presenting.push(item)
          : group.notPresenting.push(item);
      });
    });
  }

  public getROSValue(group: ROSGroup): string {
    let result = '';

    const recordSymptom = (symptom: ROSSymptom, presenting: boolean) => {
      const prefix = presenting ? '(A)' : '(D)';
      result += `${result.length ? ', ' : ''}${prefix} ${symptom.symptomName}`;
      const symptomLocation = symptom.location[0];
      if (symptomLocation) result += `, ${symptomLocation.toLowerCase()}`;
    };

    group.presenting.forEach(item => recordSymptom(item, true));
    group.notPresenting.forEach(item => recordSymptom(item, false));
    return result;
  }

  getSymptomCategory(id) {
    const parsedSymptom = this.parsedSymptoms.find(
      item => item.symptomID === id
    );
    if (!parsedSymptom) return;
    return parsedSymptom.categoryID;
  }

  getCompletedProcedures() {
    this.injections = this.patient.injections.filter(
      item => item.state === OrderStateEnum.COMPLETED
    );
    this.medications = this.patient.medications.filter(
      item => item.state === OrderStateEnum.COMPLETED
    );
  }

  getReasonForMedications(medication) {
    if (!medication.details || !medication.details.reason) return medication.historyItem;

    return `${medication.historyItem} | ${medication.details.reason}`;
  }

  getVitalsByType(type: AuditMeasurementsTypes, measurements: Measurement[] = this.patient.measurements): Measurement[] {
    return measurements.filter(item => item.measureType === type && item.value.value !== 0);
  }

  getBPVitals(measurements: Measurement[] = this.patient.measurements): string[] {
    const result: string[] = [];
    const systolics: Measurement[] = measurements.filter(item => item.measureType === 'SYSTOLIC');

    systolics.forEach(systolicItem => {
      const diastolicItem: Measurement = measurements
        .find(measurement => measurement.measureType === 'DIASTOLIC' && measurement.timestamp === systolicItem.timestamp);
      if (diastolicItem) result.push(`${systolicItem.value.value}/${diastolicItem.value.value}`);
    });
    return result;
  }

  getBMI(triage: Triage[] = this.patient.triage): string {
    const bmiSymptom = triage.find(item => item.symptomId === HistoryTypesEnums.BMI);
    return bmiSymptom ? Number(bmiSymptom.measurement).toFixed(2) : null;
  }

  getImmunizationLabel(historyItem: string) {
    return ImmunizationByHistoryType[historyItem];
  }

  public get customInstructions(): string {
    return this.treatmentsService.selectSnapshot().customInstructions;
  }
}
