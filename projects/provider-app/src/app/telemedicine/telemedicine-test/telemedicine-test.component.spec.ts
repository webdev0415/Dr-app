import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemedicineTestComponent } from './telemedicine-test.component';

describe('TelemedicineTestComponent', () => {
  let component: TelemedicineTestComponent;
  let fixture: ComponentFixture<TelemedicineTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemedicineTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemedicineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
