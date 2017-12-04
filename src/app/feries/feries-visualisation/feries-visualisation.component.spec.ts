import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriesVisualisationComponent } from './feries-visualisation.component';

describe('FeriesVisualisationComponent', () => {
  let component: FeriesVisualisationComponent;
  let fixture: ComponentFixture<FeriesVisualisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriesVisualisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriesVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
