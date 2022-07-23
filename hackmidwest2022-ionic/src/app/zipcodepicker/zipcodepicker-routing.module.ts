import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZipcodepickerPage } from './zipcodepicker.page';

const routes: Routes = [
  {
    path: '',
    component: ZipcodepickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZipcodepickerPageRoutingModule {}
