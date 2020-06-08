import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacionDatosExitosaPageRoutingModule } from './recuperacion-datos-exitosa-routing.module';

import { RecuperacionDatosExitosaPage } from './recuperacion-datos-exitosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacionDatosExitosaPageRoutingModule
  ],
  declarations: [RecuperacionDatosExitosaPage]
})
export class RecuperacionDatosExitosaPageModule {}
