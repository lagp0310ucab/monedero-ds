import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargarsaldoPage } from './recargarsaldo.page';

const routes: Routes = [
  {
    path: '',
    component: RecargarsaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargarsaldoPageRoutingModule {}
