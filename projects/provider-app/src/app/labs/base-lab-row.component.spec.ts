import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async } from '@angular/core/testing';

import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';


import { generateSpecs, TestContext } from '../tests/test-context';
import { BaseLabRowComponent } from './base-lab-row.component';
import { BusinessLab } from './business-lab.model';

@Component({ selector: 'pa-mock-base-lab-row', template: '' })
class MockBaseLabRowComponent extends BaseLabRowComponent<number> {
}

describe('BaseLabRowComponent', generateSpecs({
  componentType: MockBaseLabRowComponent,
  declarations: [MockBaseLabRowComponent],
  imports: [CommonModule]
}, ((context: TestContext<MockBaseLabRowComponent>) => {
  let component: MockBaseLabRowComponent;
  const value = new BehaviorSubject<number>(null);

  beforeEach(async(() => {
    component = context.component;
    // @ts-ignore
    component.businessLab = { value: value.asObservable(), updateLabResult: (result: number) => value.next(result), updateRules: { button: { predicate: (val: number) => val === 2 } } } as BusinessLab;
    component.viewOnly = true;
    value.next(null);
  }));

  it('should update lab result according to viewOnly state', () => {
    component.updateLabResult(1);
    expect(value.getValue()).toBeNull();
    component.viewOnly = false;
    component.updateLabResult(1);
    expect(value.getValue()).toBe(1);
  });

  it('should rely on businessLab in button active state detection', async(async() => {
    component.viewOnly = false;
    const isActive = () => component.isActive('button').pipe(take(1)).toPromise();
    expect(await isActive()).toBeFalsy();
    component.updateLabResult(1);
    expect(await isActive()).toBeFalsy();
    component.updateLabResult(2);
    expect(await isActive()).toBeTruthy();
  }));
})));
