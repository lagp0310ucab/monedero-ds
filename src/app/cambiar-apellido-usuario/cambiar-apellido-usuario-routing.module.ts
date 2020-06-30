import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarApellidoUsuarioPage } from './cambiar-apellido-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarApellidoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarApellidoUsuarioPageRoutingModule {}
