import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoInvalidoPageRoutingModule } from './codigo-invalido-routing.module';

import { CodigoInvalidoPage } from './codigo-invalido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoInvalidoPageRoutingModule
  ],
  declarations: [CodigoInvalidoPage]
})
export class CodigoInvalidoPageModule {}
