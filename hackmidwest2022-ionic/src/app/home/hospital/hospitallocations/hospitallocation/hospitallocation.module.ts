import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitallocationPageRoutingModule } from './hospitallocation-routing.module';

import { HospitallocationPage } from './hospitallocation.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitallocationPageRoutingModule
  ],
  declarations: [HospitallocationPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HospitallocationPageModule {}
