import { TestBed } from '@angular/core/testing';

import { GuardianoService } from './guardiano.service';

describe('GuardianoService', () => {
  let service: GuardianoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardianoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
