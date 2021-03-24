import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLabsComponent } from './provider-labs.component';

xdescribe('ProviderLabsComponent', () => {
  let component: ProviderLabsComponent;
  let fixture: ComponentFixture<ProviderLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
