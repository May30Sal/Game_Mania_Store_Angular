import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pastas/contato/contato.component';
import { HomeComponent } from './pastas/home/home.component';
import { MonteSeuPcComponent } from './pastas/monte-seu-pc/monte-seu-pc.component';
import { GaleriaComponent } from './pastas/galeria/galeria.component';
import { SobreComponent } from './pastas/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'monteSeuPc', component: MonteSeuPcComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
