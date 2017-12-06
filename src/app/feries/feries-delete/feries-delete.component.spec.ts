import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriesDeleteComponent } from './feries-delete.component';

describe('FeriesDeleteComponent', () => {
  let component: FeriesDeleteComponent;
  let fixture: ComponentFixture<FeriesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
