import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarOperacionesPage } from './consultar-operaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarOperacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarOperacionesPageRoutingModule {}
