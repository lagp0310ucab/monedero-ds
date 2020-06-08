import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarDatosPageRoutingModule } from './recuperar-datos-routing.module';

import { RecuperarDatosPage } from './recuperar-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarDatosPageRoutingModule
  ],
  declarations: [RecuperarDatosPage]
})
export class RecuperarDatosPageModule {}
