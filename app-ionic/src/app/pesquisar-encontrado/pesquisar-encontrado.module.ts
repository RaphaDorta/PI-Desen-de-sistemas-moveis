import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisarEncontradoPageRoutingModule } from './pesquisar-encontrado-routing.module';

import { PesquisarEncontradoPage } from './pesquisar-encontrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisarEncontradoPageRoutingModule
  ],
  declarations: [PesquisarEncontradoPage]
})
export class PesquisarEncontradoPageModule {}
