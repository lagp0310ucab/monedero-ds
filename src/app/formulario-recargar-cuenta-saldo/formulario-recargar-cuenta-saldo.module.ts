import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioRecargarCuentaSaldoPageRoutingModule } from './formulario-recargar-cuenta-saldo-routing.module';

import { FormularioRecargarCuentaSaldoPage } from './formulario-recargar-cuenta-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioRecargarCuentaSaldoPageRoutingModule
  ],
  declarations: [FormularioRecargarCuentaSaldoPage]
})
export class FormularioRecargarCuentaSaldoPageModule {}
