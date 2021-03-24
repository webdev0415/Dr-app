import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Store } from '@ngxs/store';


import { DiagnosisAccordionState } from 'components/app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.state';
import { DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';

@Injectable()
export class DiagnosisInformationResolver implements Resolve<DiagnosticEngine[]> {
  constructor(private store: Store) {}

  resolve() {
    return this.store.selectSnapshot(DiagnosisAccordionState.diagnosticEngine);
  }
}
