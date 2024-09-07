import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoInvalidoPage } from './codigo-invalido.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoInvalidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoInvalidoPageRoutingModule {}
