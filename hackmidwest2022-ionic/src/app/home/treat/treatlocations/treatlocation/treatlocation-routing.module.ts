import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreatlocationPage } from './treatlocation.page';

const routes: Routes = [
  {
    path: '',
    component: TreatlocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatlocationPageRoutingModule {}
