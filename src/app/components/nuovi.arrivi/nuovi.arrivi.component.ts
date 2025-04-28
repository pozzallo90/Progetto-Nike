import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-nuovi.arrivi',
  imports: [],
  templateUrl: './nuovi.arrivi.component.html',
  styleUrl: './nuovi.arrivi.component.css',
})
export class NuoviArriviComponent implements OnInit {
  nuoviArriviList: Prodotto[] = [];

  constructor() {}
  ngOnInit(): void {
    /*this.nuoviArriviService.getAllNuoviArrivi().subscribe((nuoviArrivi) => {
      console.log(nuoviArrivi);
    });*/
  }
}
