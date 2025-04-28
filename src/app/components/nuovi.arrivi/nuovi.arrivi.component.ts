import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { NuoviArriviService } from '../../services/nuovi.arrivi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nuovi-arrivi',
  imports: [],
  templateUrl: './nuovi.arrivi.component.html',
  styleUrl: './nuovi.arrivi.component.css',
})
export class NuoviArriviComponent implements OnInit {
  nuoviArriviList: Prodotto[] = [];

  constructor(private nuoviArriviService:NuoviArriviService) {}
  ngOnInit(): void {
    this.nuoviArriviService.getAllNuoviArrivi().subscribe((nuoviArrivi) => {
      console.log(nuoviArrivi);
    });
  }
}
