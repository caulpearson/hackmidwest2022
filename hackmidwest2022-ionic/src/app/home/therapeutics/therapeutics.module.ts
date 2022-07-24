import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapeuticsPageRoutingModule } from './therapeutics-routing.module';

import { TherapeuticsPage } from './therapeutics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapeuticsPageRoutingModule
  ],
  declarations: [TherapeuticsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TherapeuticsPageModule {}
