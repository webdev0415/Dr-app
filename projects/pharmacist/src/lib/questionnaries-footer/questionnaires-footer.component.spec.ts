import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairesFooterComponent } from './questionnaires-footer.component';

xdescribe('QuestionnairesFooterComponent', () => {
  let component: QuestionnairesFooterComponent;
  let fixture: ComponentFixture<QuestionnairesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairesFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
