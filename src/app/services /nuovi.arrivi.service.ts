import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root',
})
export class NuoviArriviService {
  _getNuoviServizi_mock: string = '../db/db.json';
  constructor(private httpClient: HttpClient) {}
  getAllNuoviArrivi(): Observable<Prodotto[]> {
    return this.httpClient.get<Prodotto[]>(this._getNuoviServizi_mock);
  }
}
