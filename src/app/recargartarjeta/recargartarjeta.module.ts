import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { RecargartarjetaPageRoutingModule } from './recargartarjeta-routing.module';

import { RecargartarjetaPage } from './recargartarjeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargartarjetaPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [RecargartarjetaPage]
})
export class RecargartarjetaPageModule {}
