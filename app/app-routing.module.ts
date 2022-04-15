import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ClientiComponent} from "./clienti/clienti.component";
import {OrdiniComponent} from "./ordini/ordini.component";
import {ErrorComponent} from "./error/error.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ModarticoloComponent} from "./modarticolo/modarticolo.component";
import {ArticoloComponent} from "./articolo/articolo.component";
import {NewartComponent} from "./newart/newart.component";
import {GuardianoService} from "./services/guardiano.service";
import {LogoutComponent} from "./logout/logout.component";


const routes: Routes = [

  {path: '', component:LoginComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'clienti', component:ClientiComponent, canActivate:[GuardianoService]},
  {path: 'clienti/:email', component:ClientiComponent, canActivate:[GuardianoService]},
  {path:'ordini', component:OrdiniComponent,canActivate:[GuardianoService]},
  {path:'ordini/:email', component:OrdiniComponent,canActivate:[GuardianoService]},
  {path:'newart', component:NewartComponent,canActivate:[GuardianoService]},
  {path:'modificaariticolo', component:ModarticoloComponent,canActivate:[GuardianoService]},
  {path:'articolo', component:ArticoloComponent,canActivate:[GuardianoService]},
  {path:'articolo/:filter', component:ArticoloComponent,canActivate:[GuardianoService]},
  {path:'articolo/:cat', component:ArticoloComponent,canActivate:[GuardianoService]},
  {path:'modart/:id', component:ModarticoloComponent,canActivate:[GuardianoService]},
  {path:'logout', component:LogoutComponent},
  {path:'**', component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
