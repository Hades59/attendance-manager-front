import { TestBed, inject } from '@angular/core/testing';

import { FeriesService } from './feries.service';

describe('FeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeriesService]
    });
  });

  it('should be created', inject([FeriesService], (service: FeriesService) => {
    expect(service).toBeTruthy();
  }));
});
