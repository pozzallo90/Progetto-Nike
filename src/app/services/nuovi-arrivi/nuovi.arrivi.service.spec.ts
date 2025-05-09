import { TestBed } from '@angular/core/testing';
import { NuoviArriviService } from './nuovi.arrivi.service';

describe('NuoviArriviService', () => {
  let service: NuoviArriviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuoviArriviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
