import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ClientiComponent } from './clienti/clienti.component';
import { LoginComponent } from './login/login.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ModarticoloComponent } from './modarticolo/modarticolo.component';
import { ArticoloComponent } from './articolo/articolo.component';
import {HttpClientModule} from "@angular/common/http";
import { DettaglioArticoloComponent } from './dettaglio-articolo/dettaglio-articolo.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import { NewartComponent } from './newart/newart.component';
import { NewArtComponent } from './new-art/new-art.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ClientiComponent,
    LoginComponent,
    OrdiniComponent,
    ErrorComponent,
    WelcomeComponent,
    CategorieComponent,
    ModarticoloComponent,
    ArticoloComponent,
    DettaglioArticoloComponent,
    NewartComponent,
    NewArtComponent,
    LogoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
