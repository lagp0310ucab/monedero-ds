import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioRecargarTarjetaSaldoPageRoutingModule } from './formulario-recargar-tarjeta-saldo-routing.module';

import { FormularioRecargarTarjetaSaldoPage } from './formulario-recargar-tarjeta-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioRecargarTarjetaSaldoPageRoutingModule
  ],
  declarations: [FormularioRecargarTarjetaSaldoPage]
})
export class FormularioRecargarTarjetaSaldoPageModule {}
