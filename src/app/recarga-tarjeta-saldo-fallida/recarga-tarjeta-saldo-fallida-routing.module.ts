import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargaTarjetaSaldoFallidaPage } from './recarga-tarjeta-saldo-fallida.page';

const routes: Routes = [
  {
    path: '',
    component: RecargaTarjetaSaldoFallidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargaTarjetaSaldoFallidaPageRoutingModule {}
