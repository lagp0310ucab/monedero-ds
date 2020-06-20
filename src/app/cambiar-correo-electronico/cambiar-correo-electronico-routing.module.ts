import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarCorreoElectronicoPage } from './cambiar-correo-electronico.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarCorreoElectronicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarCorreoElectronicoPageRoutingModule {}
