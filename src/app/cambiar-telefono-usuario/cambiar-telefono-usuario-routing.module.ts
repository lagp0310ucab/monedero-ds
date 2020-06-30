import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarTelefonoUsuarioPage } from './cambiar-telefono-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarTelefonoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarTelefonoUsuarioPageRoutingModule {}
