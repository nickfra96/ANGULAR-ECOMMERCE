import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DettagliarticoloService {
  server = "localhost";
  port = "8080"
  constructor(private httpClient:HttpClient) { }

  getDettaglioByIdArt(id:number){

  }
}
