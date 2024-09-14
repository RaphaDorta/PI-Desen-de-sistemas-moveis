import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
    // Não declare PesquisarPage aqui se já está em PesquisarPageModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Adicionar HttpClientModule aqui
    IonicModule.forRoot(),
    AppRoutingModule
    // Importe PesquisarPageModule se necessário
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
