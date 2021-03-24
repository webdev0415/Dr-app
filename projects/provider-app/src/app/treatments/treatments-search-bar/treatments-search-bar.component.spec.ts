import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsSearchBarComponent } from './treatments-search-bar.component';

xdescribe('SearchBarComponent', () => {
  let component: TreatmentsSearchBarComponent;
  let fixture: ComponentFixture<TreatmentsSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentsSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
