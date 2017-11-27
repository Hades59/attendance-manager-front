import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceVisuComponent } from './absence-visu.component';

describe('AbsenceVisuComponent', () => {
  let component: AbsenceVisuComponent;
  let fixture: ComponentFixture<AbsenceVisuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceVisuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
