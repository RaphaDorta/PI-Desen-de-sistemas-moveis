import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PesquisarPage } from './pesquisar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: PesquisarPage }]) // Configuração da rota específica
  ],
  declarations: [PesquisarPage]
})
export class PesquisarPageModule {}
