import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargaCuentaSaldoFallidaPageRoutingModule } from './recarga-cuenta-saldo-fallida-routing.module';

import { RecargaCuentaSaldoFallidaPage } from './recarga-cuenta-saldo-fallida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargaCuentaSaldoFallidaPageRoutingModule
  ],
  declarations: [RecargaCuentaSaldoFallidaPage]
})
export class RecargaCuentaSaldoFallidaPageModule {}
