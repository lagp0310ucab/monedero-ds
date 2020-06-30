import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarDireccionUsuarioPageRoutingModule } from './cambiar-direccion-usuario-routing.module';

import { CambiarDireccionUsuarioPage } from './cambiar-direccion-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarDireccionUsuarioPageRoutingModule
  ],
  declarations: [CambiarDireccionUsuarioPage]
})
export class CambiarDireccionUsuarioPageModule {}
