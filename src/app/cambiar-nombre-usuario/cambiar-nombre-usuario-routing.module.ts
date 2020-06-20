import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarNombreUsuarioPage } from './cambiar-nombre-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarNombreUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarNombreUsuarioPageRoutingModule {}
