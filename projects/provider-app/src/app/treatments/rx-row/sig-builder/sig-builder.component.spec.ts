import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigBuilderComponent } from './sig-builder.component';

xdescribe('SigBuilderComponent', () => {
  let component: SigBuilderComponent;
  let fixture: ComponentFixture<SigBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
