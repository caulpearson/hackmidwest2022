import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapeuticsPage } from './therapeutics.page';

const routes: Routes = [
  {
    path: '',
    component: TherapeuticsPage
  },
  {
    path: 'therapeuticslocations',
    loadChildren: () => import('./therapeuticslocations/therapeuticslocations.module').then( m => m.TherapeuticslocationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapeuticsPageRoutingModule {}
