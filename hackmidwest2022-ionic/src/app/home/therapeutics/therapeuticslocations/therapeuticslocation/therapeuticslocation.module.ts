import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapeuticslocationPageRoutingModule } from './therapeuticslocation-routing.module';

import { TherapeuticslocationPage } from './therapeuticslocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapeuticslocationPageRoutingModule
  ],
  declarations: [TherapeuticslocationPage]
})
export class TherapeuticslocationPageModule {}
