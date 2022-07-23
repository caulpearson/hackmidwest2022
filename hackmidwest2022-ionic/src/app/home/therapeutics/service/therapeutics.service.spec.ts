import { TestBed } from '@angular/core/testing';

import { TherapeuticsService } from './therapeutics.service';

describe('TherapeuticsService', () => {
  let service: TherapeuticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TherapeuticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
