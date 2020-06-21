import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargaTarjetaSaldoFallidaPageRoutingModule } from './recarga-tarjeta-saldo-fallida-routing.module';

import { RecargaTarjetaSaldoFallidaPage } from './recarga-tarjeta-saldo-fallida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargaTarjetaSaldoFallidaPageRoutingModule
  ],
  declarations: [RecargaTarjetaSaldoFallidaPage]
})
export class RecargaTarjetaSaldoFallidaPageModule {}
