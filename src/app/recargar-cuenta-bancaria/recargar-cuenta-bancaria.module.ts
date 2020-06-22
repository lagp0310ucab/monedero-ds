import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargarCuentaBancariaPageRoutingModule } from './recargar-cuenta-bancaria-routing.module';

import { RecargarCuentaBancariaPage } from './recargar-cuenta-bancaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargarCuentaBancariaPageRoutingModule
  ],
  declarations: [RecargarCuentaBancariaPage]
})
export class RecargarCuentaBancariaPageModule {}
