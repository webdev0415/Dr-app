import { Component, OnDestroy, Inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { StateService } from 'services/state.service';
import { DataService } from 'services/data.service';
import { DialogService } from 'services/app/dialog.service';
import { UserService } from 'user/user.service';

import { Data } from 'common/models/data.model';
import { otherIllnessGroups } from 'static/app.constants';

import { Utils } from 'utils/utils';
import { Helpers } from 'utils/helpers';
import { SymptomsService } from '../../../../services/symptoms.service';
import { PpcustomdialogComponent } from '../ppcustomdialog/ppcustomdialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IllnessPresentationTypesEnum } from 'common/enums/illness-presentation-types.enum';

import * as R from 'ramda';
import { SourceInfoSymptom } from '../../../../common/interfaces/illness-source-info.interface';


@Component({
  selector: 'pa-ppdiagnosis',
  templateUrl: './ppcontributors.component.html',
  styleUrls: ['./ppcontributors.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('0ms')),
    ]),
  ],
})
export class PpcontributorsComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];
  public Patient: Data;
  public symptomId = '';
  public illness = {confidence: 0, iCriticality: 0, icdName: '', icd10: ''};
  public hideContribution: boolean;
  public contributors = [];
  public currentSort = { key: 'contribution_abs', direction: 'desc' };
  public infoSources: SourceInfoSymptom[] = [];
  public expandedElements = [];
  public helpers = Helpers;
  public illnessPresentationEnum: typeof IllnessPresentationTypesEnum =  IllnessPresentationTypesEnum;
  public illnessPresentation  = IllnessPresentationTypesEnum[this.userService.getUserData.environment.illness_presentation];

  constructor(
    private stateService: StateService,
    private dataService: DataService,
    private symptomsService: SymptomsService,
    private route: ActivatedRoute,
    private userService: UserService,
    public dialogService: DialogService,
    public dialogRef: MatDialogRef<PpcustomdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.subscriptions.push(this.dataService.getPatient().subscribe(patientData => {
      if (!patientData) return;
      this.Patient = JSON.parse(JSON.stringify(patientData));
      this.buildData();
    }));
  }

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  buildData() {
    this.symptomId = this.data.illness;
    const illness = JSON.parse(JSON.stringify(this.Patient.diagnosticEngine)).find(x => this.symptomId === x.icd10);
    if (!illness) return;
    this.subscriptions.push(this.symptomsService.getSourceInfoData$(illness.icd10).subscribe(sources => {
      if (!sources) return;
      this.infoSources = sources;
      this.contributors = [];
      const clonedIllness = Utils.clone(illness);
      this.processIllnessData(clonedIllness);
      this.contributors.map(item => {
        item['contribution_abs'] = Math.abs(item['contribution']);
      });
      this.sort();
      this.addTenthsPercentContribution();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  processIllnessData(illness) {
    const isOtherIllnessGroup = otherIllnessGroups.includes(illness['icdGroup']);
    this.illness.confidence += illness.confidence;
    this.illness.icdName = illness.icdName;
    if (illness.iCriticality > this.illness.iCriticality) {
      this.illness.iCriticality = illness.iCriticality;
    }
    this.hideContribution = Helpers.hideContribution(this.illness.icdName);

    illness.contributors.map(contributor => {
      const triageSymptom = this.Patient.triage.find(symptom => symptom.symptomId === contributor.symptomId);
      const parsedSymptom = this.symptomsService.searchParsedSymptom(contributor);
      const infoSource = this.infoSources.find(source => source.symptomID === contributor.symptomId);
      if (infoSource) {
        contributor.source = infoSource.sourceInformation;
      }
      contributor['response'] = triageSymptom ? triageSymptom.response : false;
      contributor['sgdata'] = parsedSymptom;
      contributor['criticality'] = parsedSymptom ? parsedSymptom['criticality'] : 1;
      if (contributor['criticality'] > this.illness.iCriticality && isOtherIllnessGroup) {
        this.illness.iCriticality = contributor['criticality'];
      }
      contributor.contribution = isOtherIllnessGroup ? 0 : contributor.contribution * 100;
      const totalContributor = this.contributors.find(agregatedContributor => agregatedContributor['symptomName'] === contributor.symptomName);
      if (totalContributor) {
        totalContributor['contribution'] += contributor.contribution;
      } else {
        this.contributors.push(contributor);
      }
    });
  }

  private sort(): void {
    this.contributors = this.contributors.filter(contributor => !contributor.extend);

    const sortBy = (data: any[], key: string, direction: string) => {
      const propSortKey = R.prop(key);
      const sortDirection = direction  === 'asc' ? R.ascend : R.descend;
      const sortByKeyForDirection = R.sortWith([sortDirection(propSortKey)]);
      return sortByKeyForDirection(data);
    };

    this.contributors = sortBy(this.contributors, this.currentSort.key, this.currentSort.direction);

    const sourceData = [];
    let indexCounter = 0;
    this.contributors.forEach(contributor => {
      sourceData.push({...contributor, index: indexCounter += 1});
      sourceData.push({detailRow: true, element: contributor});
    });
    this.contributors = JSON.parse(JSON.stringify(sourceData));
  }

  private addTenthsPercentContribution(): void {
    this.contributors.map(item => {
      item['contribution'] = Utils.preciseRound(Number(item['contribution']), 1);
    });
  }

  toggleInfo(name) {
    if (this.expandedElements.includes(name)) {
      this.expandedElements = this.expandedElements.filter(item => item !== name);
    } else {
      this.expandedElements.push(name);
    }
  }

  getTriageValue(symptomId: string) {
    return this.dataService.getTriageValue(symptomId, this.Patient.triage);
  }

  cancelDialog() {
    this.dialogRef.close(false);
  }

}
