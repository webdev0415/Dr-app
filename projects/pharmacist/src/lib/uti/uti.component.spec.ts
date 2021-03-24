import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtiComponent } from './uti.component';

xdescribe('UtiComponent', () => {
  let component: UtiComponent;
  let fixture: ComponentFixture<UtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
