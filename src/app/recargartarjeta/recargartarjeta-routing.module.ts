import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargartarjetaPage } from './recargartarjeta.page';



import { Component } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: RecargartarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargartarjetaPageRoutingModule {}
