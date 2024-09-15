import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarSenhaCodigoPageRoutingModule } from './recuperar-senha-codigo-routing.module';

import { RecuperarSenhaCodigoPage } from './recuperar-senha-codigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarSenhaCodigoPageRoutingModule
  ],
  declarations: [RecuperarSenhaCodigoPage]
})
export class RecuperarSenhaCodigoPageModule {}
