import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysContainerComponent } from './surveys-container.component';

xdescribe('SurveysContainerComponent', () => {
  let component: SurveysContainerComponent;
  let fixture: ComponentFixture<SurveysContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveysContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
