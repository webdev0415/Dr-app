import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDocumentsContainerComponent } from './base-documents-container.component';

xdescribe('BaseDocumentsContainerComponent', () => {
  let component: BaseDocumentsContainerComponent;
  let fixture: ComponentFixture<BaseDocumentsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDocumentsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // @ts-ignore
    fixture = TestBed.createComponent(BaseDocumentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
