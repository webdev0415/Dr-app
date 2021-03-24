import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistDocumentsComponent } from 'documents/pharmacist-documents/pharmacist-documents.component';

xdescribe('PharmacistDocumentsComponent', () => {
  let component: PharmacistDocumentsComponent;
  let fixture: ComponentFixture<PharmacistDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
