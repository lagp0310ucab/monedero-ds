import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioOperacionesPage } from './formulario-operaciones.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioOperacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioOperacionesPageRoutingModule {}
