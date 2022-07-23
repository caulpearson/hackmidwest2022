import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZipcodepickerPageRoutingModule } from './zipcodepicker-routing.module';

import { ZipcodepickerPage } from './zipcodepicker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZipcodepickerPageRoutingModule
  ],
  declarations: [ZipcodepickerPage]
})
export class ZipcodepickerPageModule {}
