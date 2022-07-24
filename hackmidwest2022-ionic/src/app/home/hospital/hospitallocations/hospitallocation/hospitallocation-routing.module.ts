import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitallocationPage } from './hospitallocation.page';

const routes: Routes = [
  {
    path: '',
    component: HospitallocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitallocationPageRoutingModule {}
