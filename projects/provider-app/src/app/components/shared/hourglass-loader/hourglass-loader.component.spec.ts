import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourglassLoaderComponent } from 'components/shared/hourglass-loader/hourglass-loader.component';

describe('HourglassLoaderComponent', () => {
  let component: HourglassLoaderComponent;
  let fixture: ComponentFixture<HourglassLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourglassLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourglassLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
