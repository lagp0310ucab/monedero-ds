import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargaCuentaSaldoFallidaPage } from './recarga-cuenta-saldo-fallida.page';

const routes: Routes = [
  {
    path: '',
    component: RecargaCuentaSaldoFallidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargaCuentaSaldoFallidaPageRoutingModule {}
