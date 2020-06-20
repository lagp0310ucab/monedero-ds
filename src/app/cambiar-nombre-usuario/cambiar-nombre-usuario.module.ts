import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarNombreUsuarioPageRoutingModule } from './cambiar-nombre-usuario-routing.module';

import { CambiarNombreUsuarioPage } from './cambiar-nombre-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarNombreUsuarioPageRoutingModule
  ],
  declarations: [CambiarNombreUsuarioPage]
})
export class CambiarNombreUsuarioPageModule {}
