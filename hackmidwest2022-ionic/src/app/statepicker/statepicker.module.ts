import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatepickerPageRoutingModule } from './statepicker-routing.module';

import { StatepickerPage } from './statepicker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatepickerPageRoutingModule
  ],
  declarations: [StatepickerPage]
})
export class StatepickerPageModule {}
