import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Detail } from '../treatments.interface';

import { TreatmentPlanComponent } from './treatment-plan.component';

xdescribe('TreatmentPlanComponent', () => {
  let component: TreatmentPlanComponent<Detail>;
  let fixture: ComponentFixture<TreatmentPlanComponent<Detail>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
