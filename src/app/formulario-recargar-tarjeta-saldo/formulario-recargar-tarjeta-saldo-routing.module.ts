import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioRecargarTarjetaSaldoPage } from './formulario-recargar-tarjeta-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioRecargarTarjetaSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioRecargarTarjetaSaldoPageRoutingModule {}
