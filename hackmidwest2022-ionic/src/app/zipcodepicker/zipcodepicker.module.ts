import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZipcodepickerPageRoutingModule } from './zipcodepicker-routing.module';

import { ZipcodepickerPage } from './zipcodepicker.page';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    MatButtonModule,
    ZipcodepickerPageRoutingModule
  ],
  declarations: [ZipcodepickerPage]
})
export class ZipcodepickerPageModule {}
