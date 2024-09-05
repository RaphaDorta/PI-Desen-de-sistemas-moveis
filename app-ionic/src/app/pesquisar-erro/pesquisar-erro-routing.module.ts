import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisarErroPage } from './pesquisar-erro.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisarErroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisarErroPageRoutingModule {}
