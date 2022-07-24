import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalPage } from './hospital.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalPage
  },
  {
    path: 'hospitallocations',
    loadChildren: () => import('./hospitallocations/hospitallocations.module').then( m => m.HospitallocationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalPageRoutingModule {}
