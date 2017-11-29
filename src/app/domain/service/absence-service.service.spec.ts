import { TestBed, inject } from '@angular/core/testing';

import { AbsenceServiceService } from './absence-service.service';

describe('AbsenceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbsenceServiceService]
    });
  });

  it('should be created', inject([AbsenceServiceService], (service: AbsenceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
