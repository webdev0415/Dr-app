import { Component, Input, OnChanges } from '@angular/core';
import { DDX, RawDDXAnalysis } from 'common/models/additional-doctor-notes.interface';
import { DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';

@Component({
  selector: 'pa-selected-illnesses',
  templateUrl: './selected-illnesses.component.html',
  styleUrls: ['./selected-illnesses.component.scss']
})
export class SelectedIllnessesComponent implements OnChanges {
  @Input() ddx: DDX;
  @Input() diagnosticEngine: DiagnosticEngine[];
  public selectedIllnesses: Array<{icdCode: string} & Pick<RawDDXAnalysis, 'ICDName' | 'explanation'>> = [];
  public ruledOutIllnesses: Array<{icdCode: string} & Pick<RawDDXAnalysis, 'ICDName' | 'explanation'>> = [];

  constructor() { }

  ngOnChanges(): void {
    if (!this.diagnosticEngine) return;
    const illnesses = this.getIllnesses(this.ddx, true);
    this.selectedIllnesses = illnesses.filter(illness => {
      const defIllness = this.diagnosticEngine.find(item => item.icd10 === illness.icdCode);
      return defIllness ? defIllness.icdGroup !== 'Defined Illnesses' : {};
    }).map(illness => {
      const de = this.diagnosticEngine.find(item => item.icd10 === illness.icdCode);
      if (de) illness.ICDName = de.icdName;
      return illness;
    });

    this.ruledOutIllnesses = this.getIllnesses(this.ddx, false);
  }

  private getIllnesses(ddx: DDX, selected: boolean): Array<{icdCode: string} & Pick<RawDDXAnalysis, 'ICDName' | 'explanation'>> {
    if (!ddx) return [];
    return Object.entries(ddx.DDXRawAnalysis)
      .map(([key, val]) => ({...val, icdCode: key}))
      .filter(item => item.isSelected === selected && item.explanation.length)
      .sort((a, b) => b.explanation.length - a.explanation.length);
  }
}
