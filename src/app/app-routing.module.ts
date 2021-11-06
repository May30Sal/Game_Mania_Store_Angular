import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pastas/contato/contato.component';
import { HomeComponent } from './pastas/home/home.component';
import { MonteSeuPcComponent } from './pastas/monte-seu-pc/monte-seu-pc.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'monteSeuPc', component: MonteSeuPcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
