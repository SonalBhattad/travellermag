import { TestBed } from '@angular/core/testing';

import { MagzineServiceService } from './magzine-service.service';

describe('MagzineServiceService', () => {
  let service: MagzineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagzineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
