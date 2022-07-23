import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatepickerPage } from './statepicker.page';

const routes: Routes = [
  {
    path: '',
    component: StatepickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatepickerPageRoutingModule {}
