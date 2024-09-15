import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizacaoCadastralPageRoutingModule } from './atualizacao-cadastral-routing.module';

import { AtualizacaoCadastralPage } from './atualizacao-cadastral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizacaoCadastralPageRoutingModule
  ],
  declarations: [AtualizacaoCadastralPage]
})
export class AtualizacaoCadastralPageModule {}
