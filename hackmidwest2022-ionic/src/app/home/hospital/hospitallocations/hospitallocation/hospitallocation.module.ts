import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitallocationPageRoutingModule } from './hospitallocation-routing.module';

import { HospitallocationPage } from './hospitallocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitallocationPageRoutingModule
  ],
  declarations: [HospitallocationPage]
})
export class HospitallocationPageModule {}
