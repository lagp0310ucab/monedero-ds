import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargaTarjetaSaldoExitosaPage } from './recarga-tarjeta-saldo-exitosa.page';

const routes: Routes = [
  {
    path: '',
    component: RecargaTarjetaSaldoExitosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargaTarjetaSaldoExitosaPageRoutingModule {}
