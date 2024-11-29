import { TestBed } from '@angular/core/testing';

import { RegimenServiceService } from './regimen-service.service';

describe('RegimenServiceService', () => {
  let service: RegimenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegimenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
