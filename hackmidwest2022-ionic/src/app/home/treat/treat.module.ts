import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreatPageRoutingModule } from './treat-routing.module';

import { TreatPage } from './treat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreatPageRoutingModule
  ],
  declarations: [TreatPage]
})
export class TreatPageModule {}
