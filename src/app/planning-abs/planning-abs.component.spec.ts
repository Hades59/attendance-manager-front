import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningAbsComponent } from './planning-abs.component';

describe('PlanningAbsComponent', () => {
  let component: PlanningAbsComponent;
  let fixture: ComponentFixture<PlanningAbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningAbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
