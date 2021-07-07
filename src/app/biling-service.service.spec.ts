import { TestBed } from '@angular/core/testing';

import { BilingServiceService } from './biling-service.service';

describe('BilingServiceService', () => {
  let service: BilingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
