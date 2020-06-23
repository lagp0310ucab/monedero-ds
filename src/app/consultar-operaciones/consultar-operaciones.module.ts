import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarOperacionesPageRoutingModule } from './consultar-operaciones-routing.module';

import { ConsultarOperacionesPage } from './consultar-operaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarOperacionesPageRoutingModule
  ],
  declarations: [ConsultarOperacionesPage]
})
export class ConsultarOperacionesPageModule {}
