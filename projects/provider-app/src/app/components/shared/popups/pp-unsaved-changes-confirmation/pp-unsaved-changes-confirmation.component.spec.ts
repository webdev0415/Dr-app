import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { PpUnsavedChangesConfirmationComponent } from './pp-unsaved-changes-confirmation.component';

describe('PpUnsavedChangesConfirmationComponent', () => {
  let component: PpUnsavedChangesConfirmationComponent;
  let fixture: ComponentFixture<PpUnsavedChangesConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpUnsavedChangesConfirmationComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpUnsavedChangesConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
