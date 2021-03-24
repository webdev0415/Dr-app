import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxRowComponent } from './rx-row.component';

xdescribe('RxRowComponent', () => {
  let component: RxRowComponent;
  let fixture: ComponentFixture<RxRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
