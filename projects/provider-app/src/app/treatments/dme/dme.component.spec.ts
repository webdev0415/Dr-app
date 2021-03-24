import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmeComponent } from './dme.component';

describe('DmeComponent', () => {
  let component: DmeComponent;
  let fixture: ComponentFixture<DmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
