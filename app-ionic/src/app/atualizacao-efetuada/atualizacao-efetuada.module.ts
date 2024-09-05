import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizacaoEfetuadaPageRoutingModule } from './atualizacao-efetuada-routing.module';

import { AtualizacaoEfetuadaPage } from './atualizacao-efetuada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizacaoEfetuadaPageRoutingModule
  ],
  declarations: [AtualizacaoEfetuadaPage]
})
export class AtualizacaoEfetuadaPageModule {}
