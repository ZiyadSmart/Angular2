import { TestBed } from '@angular/core/testing';

import { HumiditeService } from './humidite.service';

describe('HumiditeService', () => {
  let service: HumiditeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumiditeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
