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
    // Outros componentes que você pode ter, se necessários
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Adicionar HttpClientModule aqui
    IonicModule.forRoot(),
    AppRoutingModule
    // Importe outros módulos se necessário
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
