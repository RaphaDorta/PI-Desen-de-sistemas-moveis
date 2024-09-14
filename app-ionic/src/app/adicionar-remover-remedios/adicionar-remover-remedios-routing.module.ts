import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarRemoverRemediosPage } from './adicionar-remover-remedios.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarRemoverRemediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarRemoverRemediosPageRoutingModule {}
