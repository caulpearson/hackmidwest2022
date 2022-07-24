import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'statepicker',
    pathMatch: 'full'
  },
  {
    path: 'statepicker',
    loadChildren: () => import('./statepicker/statepicker.module').then( m => m.StatepickerPageModule)
  },
  {
    path: 'zipcodepicker',
    loadChildren: () => import('./zipcodepicker/zipcodepicker.module').then( m => m.ZipcodepickerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
