import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpLoadProtocolComponent } from './pp-load-protocol.component';

xdescribe('PpLoadProtocolComponent', () => {
  let component: PpLoadProtocolComponent;
  let fixture: ComponentFixture<PpLoadProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpLoadProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpLoadProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
