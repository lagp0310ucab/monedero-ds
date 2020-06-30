import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarTelefonoUsuarioPageRoutingModule } from './cambiar-telefono-usuario-routing.module';

import { CambiarTelefonoUsuarioPage } from './cambiar-telefono-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarTelefonoUsuarioPageRoutingModule
  ],
  declarations: [CambiarTelefonoUsuarioPage]
})
export class CambiarTelefonoUsuarioPageModule {}
