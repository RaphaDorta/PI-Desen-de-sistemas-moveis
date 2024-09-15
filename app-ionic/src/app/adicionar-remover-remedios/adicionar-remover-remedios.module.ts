import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdicionarRemoverRemediosPageRoutingModule } from './adicionar-remover-remedios-routing.module';
import { AdicionarRemoverRemediosPage } from './adicionar-remover-remedios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarRemoverRemediosPageRoutingModule
  ],
  declarations: [AdicionarRemoverRemediosPage]
})
export class AdicionarRemoverRemediosPageModule {}
