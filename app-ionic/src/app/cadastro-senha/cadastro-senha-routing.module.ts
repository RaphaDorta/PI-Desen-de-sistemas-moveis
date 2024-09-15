import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroSenhaPage } from './cadastro-senha.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroSenhaPageRoutingModule {}
