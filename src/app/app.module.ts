import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pastas/home/home.component';
import { ContatoComponent } from './pastas/contato/contato.component';
import { MonteSeuPcComponent } from './pastas/monte-seu-pc/monte-seu-pc.component';
import { HeaderComponent } from './pastas/header/header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContatoComponent, MonteSeuPcComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
