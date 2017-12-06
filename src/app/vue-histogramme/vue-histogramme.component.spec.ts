import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueHistogrammeComponent } from './vue-histogramme.component';

describe('VueHistogrammeComponent', () => {
  let component: VueHistogrammeComponent;
  let fixture: ComponentFixture<VueHistogrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueHistogrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueHistogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
