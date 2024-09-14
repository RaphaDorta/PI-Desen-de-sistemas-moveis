import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Importar o RouterModule

import { PesquisarPage } from './pesquisar.page'; // Corrija o nome do componente se necessário

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule // Adicionar o RouterModule aqui
  ],
  declarations: [PesquisarPage],
  exports: [PesquisarPage] // Se necessário para outros módulos
})
export class PesquisarPageModule { }
