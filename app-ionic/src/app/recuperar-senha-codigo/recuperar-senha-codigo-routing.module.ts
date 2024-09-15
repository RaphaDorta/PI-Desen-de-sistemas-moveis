import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarSenhaCodigoPage } from './recuperar-senha-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarSenhaCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarSenhaCodigoPageRoutingModule {}
