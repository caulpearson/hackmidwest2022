import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapeuticslocationPage } from './therapeuticslocation.page';

const routes: Routes = [
  {
    path: '',
    component: TherapeuticslocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapeuticslocationPageRoutingModule {}
