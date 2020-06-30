import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarApellidoUsuarioPageRoutingModule } from './cambiar-apellido-usuario-routing.module';

import { CambiarApellidoUsuarioPage } from './cambiar-apellido-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarApellidoUsuarioPageRoutingModule
  ],
  declarations: [CambiarApellidoUsuarioPage]
})
export class CambiarApellidoUsuarioPageModule {}
