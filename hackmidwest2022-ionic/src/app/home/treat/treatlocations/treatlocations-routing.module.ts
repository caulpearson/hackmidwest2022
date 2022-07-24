import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreatlocationsPage } from './treatlocations.page';

const routes: Routes = [
  {
    path: '',
    component: TreatlocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatlocationsPageRoutingModule {}
