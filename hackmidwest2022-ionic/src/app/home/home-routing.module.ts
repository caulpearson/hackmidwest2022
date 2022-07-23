import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'hospital',
      pathMatch: 'full'
    },
    {
      path: '',
      component: HomePage,
      children: [
        {
          path: 'therapeutics',
          loadChildren: () => import('./therapeutics/therapeutics.module').then( m => m.TherapeuticsPageModule)
        },
        {
          path: 'hospital',
          loadChildren: () => import('./hospital/hospital.module').then( m => m.HospitalPageModule)
        },
        {
          path: 'treat',
          loadChildren: () => import('./treat/treat.module').then( m => m.TreatPageModule)
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
