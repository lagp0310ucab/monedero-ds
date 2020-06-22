import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioRecargarCuentaSaldoPage } from './formulario-recargar-cuenta-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioRecargarCuentaSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioRecargarCuentaSaldoPageRoutingModule {}
