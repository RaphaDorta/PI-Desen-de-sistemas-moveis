import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizacaoCadastralPage } from './atualizacao-cadastral.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizacaoCadastralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizacaoCadastralPageRoutingModule {}
