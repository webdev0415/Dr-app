import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdSoresComponent } from './cold-sores.component';

xdescribe('ColdSoresComponent', () => {
  let component: ColdSoresComponent;
  let fixture: ComponentFixture<ColdSoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdSoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdSoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
