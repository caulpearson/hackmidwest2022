import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitallocationsPageRoutingModule } from './hospitallocations-routing.module';

import { HospitallocationsPage } from './hospitallocations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitallocationsPageRoutingModule
  ],
  declarations: [HospitallocationsPage]
})
export class HospitallocationsPageModule {}
