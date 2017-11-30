import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceVisualizeComponent } from './absence-visualize.component';

describe('AbsenceVisualizeComponent', () => {
  let component: AbsenceVisualizeComponent;
  let fixture: ComponentFixture<AbsenceVisualizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceVisualizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
