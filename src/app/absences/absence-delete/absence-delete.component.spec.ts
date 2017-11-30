import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceDeleteComponent } from './absence-delete.component';

describe('AbsenceDeleteComponent', () => {
  let component: AbsenceDeleteComponent;
  let fixture: ComponentFixture<AbsenceDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
