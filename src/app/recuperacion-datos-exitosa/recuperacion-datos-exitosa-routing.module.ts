import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacionDatosExitosaPage } from './recuperacion-datos-exitosa.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacionDatosExitosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacionDatosExitosaPageRoutingModule {}
