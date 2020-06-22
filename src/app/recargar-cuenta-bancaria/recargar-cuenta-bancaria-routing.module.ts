import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargarCuentaBancariaPage } from './recargar-cuenta-bancaria.page';

const routes: Routes = [
  {
    path: '',
    component: RecargarCuentaBancariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargarCuentaBancariaPageRoutingModule {}
