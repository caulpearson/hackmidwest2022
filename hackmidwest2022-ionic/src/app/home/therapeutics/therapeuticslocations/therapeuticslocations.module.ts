import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapeuticslocationsPageRoutingModule } from './therapeuticslocations-routing.module';

import { TherapeuticslocationsPage } from './therapeuticslocations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapeuticslocationsPageRoutingModule
  ],
  declarations: [TherapeuticslocationsPage]
})
export class TherapeuticslocationsPageModule {}