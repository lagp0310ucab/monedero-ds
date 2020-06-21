import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargarsaldoPageRoutingModule } from './recargarsaldo-routing.module';

import { RecargarsaldoPage } from './recargarsaldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargarsaldoPageRoutingModule
  ],
  declarations: [RecargarsaldoPage]
})
export class RecargarsaldoPageModule {}
