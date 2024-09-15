import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisarErroPageRoutingModule } from './pesquisar-erro-routing.module';

import { PesquisarErroPage } from './pesquisar-erro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisarErroPageRoutingModule
  ],
  declarations: [PesquisarErroPage]
})
export class PesquisarErroPageModule {}
