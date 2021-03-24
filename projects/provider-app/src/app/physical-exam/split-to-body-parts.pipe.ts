import { Pipe, PipeTransform } from '@angular/core';
import { PESystem } from '../common/interfaces/physical-exam-panel.interfaces';
import { clone, equals } from 'ramda';
import { ENTParts } from './physical-exams.constants';

@Pipe({
  name: 'splitToBodyParts'
})
export class SplitToBodyPartsPipe implements PipeTransform {
  private oldENTSystems: PESystem[] = [];

  public transform(exam: PESystem): PESystem[] {
    if (exam.examName !== 'ENT') return [exam];
    let ENTSystems: PESystem[] = [];
    ENTParts.forEach(part => {
      const system = clone(exam);
      const subsystems = system.descriptionsArray.filter(subsystem => subsystem.mod.some(item => item.findingFor.includes(part)));
      const ENTSystem: PESystem = {
        examName: system.examName,
        descriptionsArray: subsystems.map(subsystem => {
          subsystem.mod = subsystem.mod.filter(item => item.findingFor.includes(part));
          return subsystem;
        })
      };
      ENTSystems.push(ENTSystem);
    });
    if (equals(ENTSystems, this.oldENTSystems)) {
      ENTSystems = this.oldENTSystems;
    } else {
      this.oldENTSystems = [...ENTSystems];
    }
    return ENTSystems;
  }
}
