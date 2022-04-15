import { TestBed } from '@angular/core/testing';

import { DettagliarticoloService } from './dettagliarticolo.service';

describe('DettagliarticoloService', () => {
  let service: DettagliarticoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DettagliarticoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
