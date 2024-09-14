import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PesquisarPage } from './pesquisar/pesquisar.page'; // Importar o componente PesquisarPage

@NgModule({
  declarations: [
    AppComponent,
    PesquisarPage // Declarar o componente PesquisarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Adicionar HttpClientModule aqui
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
