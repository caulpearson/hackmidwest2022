import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreatlocationsPageRoutingModule } from './treatlocations-routing.module';

import { TreatlocationsPage } from './treatlocations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreatlocationsPageRoutingModule
  ],
  declarations: [TreatlocationsPage]
})
export class TreatlocationsPageModule {}
