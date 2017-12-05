import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriesCreationComponent } from './feries-creation.component';

describe('FeriesCreationComponent', () => {
  let component: FeriesCreationComponent;
  let fixture: ComponentFixture<FeriesCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriesCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
