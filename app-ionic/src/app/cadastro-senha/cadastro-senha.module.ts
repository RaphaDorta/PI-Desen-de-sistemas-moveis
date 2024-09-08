import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSenhaPageRoutingModule } from './cadastro-senha-routing.module';

import { CadastroSenhaPage } from './cadastro-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSenhaPageRoutingModule
  ],
  declarations: [CadastroSenhaPage]
})
export class CadastroSenhaPageModule {}
