import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

export class AuthData {
  constructor(
    public codice:string,
    public messaggio:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  server = "localhost";
  port = "8080"

  isLogged(){
    return (sessionStorage.getItem("Utente") != null) ? true : false;
  }

  clearAll(){
    sessionStorage.removeItem("Utente")
  }

  autenticaService(userId:string,password:string){
    let headers = new HttpHeaders(
      {Authorization:  "Basic " + window.btoa(userId + ":" + password)}
    )

    return this.httpClient.get<AuthData>(`http://${this.server}:${this.port}/articoli/test/`,{headers})
      .pipe(
        map( data =>{
          sessionStorage.setItem("Utente",userId);
          return data;
        }

      ));
  }
loggedUser (){
    let utente = sessionStorage.getItem("Utente");
    return (sessionStorage.getItem("Utente") != null ? utente : "");
}

}
