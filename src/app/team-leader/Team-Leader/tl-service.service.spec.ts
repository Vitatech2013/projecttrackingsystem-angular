import { TestBed } from '@angular/core/testing';

import { TLServiceService } from './tl-service.service';

describe('TLServiceService', () => {
  let service: TLServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TLServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
