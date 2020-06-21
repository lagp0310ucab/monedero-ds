import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargaCuentaSaldoExitosaPageRoutingModule } from './recarga-cuenta-saldo-exitosa-routing.module';

import { RecargaCuentaSaldoExitosaPage } from './recarga-cuenta-saldo-exitosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargaCuentaSaldoExitosaPageRoutingModule
  ],
  declarations: [RecargaCuentaSaldoExitosaPage]
})
export class RecargaCuentaSaldoExitosaPageModule {}
