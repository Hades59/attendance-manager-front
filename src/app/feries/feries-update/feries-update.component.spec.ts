import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriesUpdateComponent } from './feries-update.component';

describe('FeriesUpdateComponent', () => {
  let component: FeriesUpdateComponent;
  let fixture: ComponentFixture<FeriesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
