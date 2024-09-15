import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSucessoPageRoutingModule } from './cadastro-sucesso-routing.module';

import { CadastroSucessoPage } from './cadastro-sucesso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSucessoPageRoutingModule
  ],
  declarations: [CadastroSucessoPage]
})
export class CadastroSucessoPageModule {}
