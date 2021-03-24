import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrepThroatComponent } from './strep-throat.component';

xdescribe('StrepThroatComponent', () => {
  let component: StrepThroatComponent;
  let fixture: ComponentFixture<StrepThroatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrepThroatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrepThroatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
