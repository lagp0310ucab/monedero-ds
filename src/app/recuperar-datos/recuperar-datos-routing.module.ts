import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarDatosPage } from './recuperar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarDatosPageRoutingModule {}
