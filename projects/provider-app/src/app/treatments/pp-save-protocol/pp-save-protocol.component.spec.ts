import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpSaveProtocolComponent } from './pp-save-protocol.component';

xdescribe('PpSaveProtocolComponent', () => {
  let component: PpSaveProtocolComponent;
  let fixture: ComponentFixture<PpSaveProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpSaveProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpSaveProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
