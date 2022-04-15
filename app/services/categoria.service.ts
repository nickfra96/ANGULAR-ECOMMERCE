import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Articoli} from "../articolo/articolo.component";
import {Categoria} from "../categorie/categorie.component";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  server = "localhost";
  port = "8080"
  constructor(private httpClient:HttpClient) { }

  getCategorie (){
    return this.httpClient.get<Categoria[]> (`http://${this.server}:${this.port}/categoria/listaCategorie`)
  }

  getArticoloByCategoria(categoria:string) {

    return this.httpClient.get<Articoli[]>(`http://${this.server}:${this.port}/categoria/articoli/${categoria}`)

  }
}
