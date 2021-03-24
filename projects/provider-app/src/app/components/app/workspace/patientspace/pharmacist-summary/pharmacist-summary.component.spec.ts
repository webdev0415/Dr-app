import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistSummaryComponent } from './pharmacist-summary.component';

xdescribe('PharmacistSummaryComponent', () => {
  let component: PharmacistSummaryComponent;
  let fixture: ComponentFixture<PharmacistSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
