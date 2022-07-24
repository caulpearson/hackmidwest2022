import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitallocationsPage } from './hospitallocations.page';

const routes: Routes = [
  {
    path: '',
    component: HospitallocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitallocationsPageRoutingModule {}
