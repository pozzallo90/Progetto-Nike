import { Routes } from '@angular/router';
import { NuoviArriviComponent } from './components/nuovi.arrivi/nuovi.arrivi.component';
import { DettaglioProdottoComponent } from './components/dettaglio-prodotto/dettaglio-prodotto/dettaglio-prodotto.component';

export const routes: Routes = [
  {
    path: 'nuovi-arrivi',
    component: NuoviArriviComponent,
  },
  {
    path: 'dettaglio-prodotto/:id',
    component: DettaglioProdottoComponent,
  },
];
