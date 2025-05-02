import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { NuoviArriviService } from '../../services/nuovi.arrivi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuovi-arrivi',
  imports: [CommonModule],
  templateUrl: './nuovi.arrivi.component.html',
  styleUrl: './nuovi.arrivi.component.css',
})
export class NuoviArriviComponent implements OnInit {
  nuoviArriviList: Prodotto[] = [];

  constructor(private nuoviArriviService: NuoviArriviService) {}
  ngOnInit(): void {
    this.nuoviArriviService.getAllNuoviArrivi().subscribe((nuoviArrivi) => {
      // console.log(nuoviArrivi);
      this.nuoviArriviList.push(...nuoviArrivi);

      const indexCercato = 4;
      const index = this.nuoviArriviList.findIndex(
        (prodotto: Prodotto) => prodotto.id === indexCercato
      );
      const prodottoCercato = this.nuoviArriviList.find(
        (prodotto: Prodotto) => prodotto.id === indexCercato
      );
      console.log(index);
      console.log(prodottoCercato);
    });
  }
}
