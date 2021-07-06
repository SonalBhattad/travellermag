import { TestBed } from '@angular/core/testing';

import { MagzineserviceService } from './magzineservice.service';

describe('MagzineserviceService', () => {
  let service: MagzineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagzineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
