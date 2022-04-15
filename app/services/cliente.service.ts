import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiMessage, Articoli} from "../articolo/articolo.component";
import {Utente} from "../clienti/clienti.component";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  server = "localhost";
  port = "8080"

  constructor(private httpClient:HttpClient) { }

  getUtenti(){
    return this.httpClient.get<Utente[]> (`http://${this.server}:${this.port}/utente/listaUtenti`);
  }

  findUtente(email:string){

    return  this.httpClient.get<Utente> (`http://${this.server}:${this.port}/utente/find/${email}`);

  }

  delUtente(email:string){
    return this.httpClient.delete<ApiMessage> (`http://${this.server}:${this.port}/utente/elimina/${email}`);
  }


}
