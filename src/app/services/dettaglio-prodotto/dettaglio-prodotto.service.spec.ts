import { TestBed } from '@angular/core/testing';

import { DettaglioProdottoService } from './dettaglio-prodotto.service';

describe('DettaglioProdottoService', () => {
  let service: DettaglioProdottoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DettaglioProdottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
