import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerDocumentsComponent } from 'documents/practitioner-documents/practitioner-documents.component';

xdescribe('PractitionerDocumentsComponent', () => {
  let component: PractitionerDocumentsComponent;
  let fixture: ComponentFixture<PractitionerDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
