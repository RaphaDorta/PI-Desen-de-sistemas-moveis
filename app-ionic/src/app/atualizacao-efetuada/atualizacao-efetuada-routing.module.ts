import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizacaoEfetuadaPage } from './atualizacao-efetuada.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizacaoEfetuadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizacaoEfetuadaPageRoutingModule {}
