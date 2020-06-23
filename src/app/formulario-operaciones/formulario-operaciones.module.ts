import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioOperacionesPageRoutingModule } from './formulario-operaciones-routing.module';

import { FormularioOperacionesPage } from './formulario-operaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioOperacionesPageRoutingModule
  ],
  declarations: [FormularioOperacionesPage]
})
export class FormularioOperacionesPageModule {}
