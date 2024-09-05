import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroSucessoPage } from './cadastro-sucesso.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroSucessoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroSucessoPageRoutingModule {}
