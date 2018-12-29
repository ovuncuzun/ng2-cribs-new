import { TestBed } from '@angular/core/testing';

import { CribsService } from './cribs.service';

describe('CribsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CribsService = TestBed.get(CribsService);
    expect(service).toBeTruthy();
  });
});
