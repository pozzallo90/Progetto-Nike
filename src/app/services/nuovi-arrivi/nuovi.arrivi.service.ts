import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from '../../models/prodotto';
const ApiUrl = 'http://localhost:3000/prodotti';
@Injectable({
  providedIn: 'root',
})
export class NuoviArriviService {
  constructor(private httpClient: HttpClient) {}
  getAllNuoviArrivi(): Observable<Prodotto[]> {
    //esempio mockato

    //esempio url reale
    return this.httpClient.get<Prodotto[]>(ApiUrl);
  }
}
