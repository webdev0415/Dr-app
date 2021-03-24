import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationNotesComponent } from './authorization-notes.component';

xdescribe('AuthorizationNotesComponent', () => {
  let component: AuthorizationNotesComponent;
  let fixture: ComponentFixture<AuthorizationNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
