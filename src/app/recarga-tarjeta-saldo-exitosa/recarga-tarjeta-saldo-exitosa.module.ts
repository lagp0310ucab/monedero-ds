import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargaTarjetaSaldoExitosaPageRoutingModule } from './recarga-tarjeta-saldo-exitosa-routing.module';

import { RecargaTarjetaSaldoExitosaPage } from './recarga-tarjeta-saldo-exitosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargaTarjetaSaldoExitosaPageRoutingModule
  ],
  declarations: [RecargaTarjetaSaldoExitosaPage]
})
export class RecargaTarjetaSaldoExitosaPageModule {}
