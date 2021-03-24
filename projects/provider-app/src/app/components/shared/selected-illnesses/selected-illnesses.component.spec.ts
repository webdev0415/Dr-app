import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedIllnessesComponent } from './selected-illnesses.component';

describe('SelectedIllnessesComponent', () => {
  let component: SelectedIllnessesComponent;
  let fixture: ComponentFixture<SelectedIllnessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedIllnessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedIllnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
