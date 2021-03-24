import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthRefillComponent } from './birth-refill.component';

xdescribe('BirthRefillComponent', () => {
  let component: BirthRefillComponent;
  let fixture: ComponentFixture<BirthRefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthRefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
