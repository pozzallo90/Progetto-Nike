import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from '../../models/prodotto';
const ApiUrl = 'http://localhost:3000/prodotti';
@Injectable({
  providedIn: 'root',
})
export class DettaglioProdottoService {
  constructor(private httpClient: HttpClient) {}
  getByID(id: number): Observable<Prodotto> {
    //esempio mockato

    //esempio url reale
    return this.httpClient.get<Prodotto>(`${ApiUrl}/${id}`);
  }
}
