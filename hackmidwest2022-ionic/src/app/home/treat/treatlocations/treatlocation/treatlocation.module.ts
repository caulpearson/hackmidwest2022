import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreatlocationPageRoutingModule } from './treatlocation-routing.module';

import { TreatlocationPage } from './treatlocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreatlocationPageRoutingModule
  ],
  declarations: [TreatlocationPage]
})
export class TreatlocationPageModule {}
