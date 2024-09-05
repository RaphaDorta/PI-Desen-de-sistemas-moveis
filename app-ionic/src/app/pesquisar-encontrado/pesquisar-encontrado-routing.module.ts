import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisarEncontradoPage } from './pesquisar-encontrado.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisarEncontradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisarEncontradoPageRoutingModule {}
