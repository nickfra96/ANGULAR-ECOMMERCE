import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiMessage, Articoli} from "../articolo/articolo.component";
import {Articolii} from "../newart/newart.component";


@Injectable({
  providedIn: 'root'
})
export class ArticoliServiceService {

  server = "localhost";
  port = "8080"

  constructor(private httpClient:HttpClient) { }

  getArticoli (){
    return this.httpClient.get<Articoli[]> (`http://${this.server}:${this.port}/articoli/listaArticoli`);
  }

  getArticoliDescrizione(descrizione:string){
    return this.httpClient.get<Articoli[]>(`http://${this.server}:${this.port}/articoli/cerca/descrizione/${descrizione}`);
  }

  getArticoloById (id:number){

    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/articoli/cerca/${id}`);

  }

  delarticoloById(id:number){

    return this.httpClient.delete<ApiMessage>(`http://${this.server}:${this.port}/articoli/elimina/${id}`)

  }

  updateArticolo (articolo:Articoli){

    console.log(articolo)
    return this.httpClient.put<ApiMessage>(`http://${this.server}:${this.port}/articoli/modifica`,articolo)

  }

  addArticolo(articolo:Articolii){
    return this.httpClient.post<ApiMessage>(`http://${this.server}:${this.port}/articoli/inserisci`,articolo)
  }
}
