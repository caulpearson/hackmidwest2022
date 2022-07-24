import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreatPage } from './treat.page';

const routes: Routes = [
  {
    path: '',
    component: TreatPage
  },
  {
    path: 'treatlocations',
    loadChildren: () => import('./treatlocations/treatlocations.module').then( m => m.TreatlocationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatPageRoutingModule {}
