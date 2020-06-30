import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarDireccionUsuarioPage } from './cambiar-direccion-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarDireccionUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarDireccionUsuarioPageRoutingModule {}
