import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DettaglioProdottoService } from '../../../services/dettaglio-prodotto/dettaglio-prodotto.service';
import { Prodotto } from '../../../models/prodotto';

@Component({
  selector: 'app-dettaglio-prodotto',
  imports: [],
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrl: './dettaglio-prodotto.component.css',
})
export class DettaglioProdottoComponent implements OnInit {
  constructor(
    private dettaglioProdottoService: DettaglioProdottoService,
    private activedRouted: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = +this.activedRouted.snapshot.params['id'];
    console.log(id);
    this.dettaglioProdottoService
      .getByID(id)
      .subscribe((prodotto: Prodotto) => {
        console.log(prodotto);
      });
  }
}
