import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapeuticslocationsPage } from './therapeuticslocations.page';

const routes: Routes = [
  {
    path: '',
    component: TherapeuticslocationsPage
  },
  {
    path: 'therapeuticslocation',
    loadChildren: () => import('./therapeuticslocation/therapeuticslocation.module').then( m => m.TherapeuticslocationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapeuticslocationsPageRoutingModule {}
