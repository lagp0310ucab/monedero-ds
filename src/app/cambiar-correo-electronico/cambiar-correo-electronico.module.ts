import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarCorreoElectronicoPageRoutingModule } from './cambiar-correo-electronico-routing.module';

import { CambiarCorreoElectronicoPage } from './cambiar-correo-electronico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarCorreoElectronicoPageRoutingModule
  ],
  declarations: [CambiarCorreoElectronicoPage]
})
export class CambiarCorreoElectronicoPageModule {}
