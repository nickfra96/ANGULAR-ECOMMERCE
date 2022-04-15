import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiMessage, Articoli} from "../articolo/articolo.component";
import {ClienteService} from "../services/cliente.service";
import {Categoria} from "../categorie/categorie.component";

export class DettaglioArticolo{
  constructor(
    public cpu:string,
    public ram:string,
    public scheda_video:string,
    public display:string,
    public so:string,
    public hd:string,

  )
  {}
}

export class Articolo {
  constructor(
    public id:number,
    public nome:string,
    public descrizione:string,
    public quantita:number,
    public prezzo:number,
    public categoria:Categoria,
    public image:any,
    public dettaglioArticolo:DettaglioArticolo[]
  )
  {}
}




export class Ordini {
  constructor(
    public id_ordine:bigint,
    public data:Date,
    public quantita:number,
    public prezzoTotale:number,
    public listaArticoli:Articolo[]
  ) {
  }

}


export class Utente{
  constructor(
    public email:string,
    public nome:string,
    public cognome:string,
    public password:string,
    public indirizzo:string,
    public citta:string,
    public immagine:string,
    public eta:number,
    public abilitato:boolean,
    public ordini:Ordini[]

  )
  {}
}



@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  constructor(private router:Router,private utenteService:ClienteService, private route:ActivatedRoute) { }

  utenti:Utente[]
  numUtenti:number
  pagina = 1;
  righe = 4; //visualizzo 4 card alla volta
  messaggio:string='Nessun utente trovato'
  email:string  = ''
  utente:Utente
  apiMsg:ApiMessage
  msg:string=''
  eliminato:boolean= false


  ngOnInit(): void {
    this.email = this.route.snapshot.params['email']

    //this.router.navigate(['clienti'])

    this.utenteService.getUtenti().subscribe(
      response =>{
        console.log(response)
        this.utenti = response
        this.numUtenti = this.utenti.length
      }
    )

    if (this.email != undefined){
      this.getUtenteByEmail(this.email)
    }


  }

  public getU(){
   // this.getUtenteByEmail(this.email)
this.router.navigate(['ordini',this.email])
  }

  public getUtenteByEmail (email:string){
    this.utenteService.findUtente(email).subscribe(
      response =>{
        console.log(response);
        this.utente = response
      },
      error => {
        console.log(error)
      }
    )
  }

  delUtente(email:string){
    this.utenteService.delUtente(email).subscribe(
      response =>{
        this.apiMsg = response
        this.msg = this.apiMsg.message
        this.refreshALL()

      }
    )

  }

  refreshALL(){

    this.utenteService.getUtenti().subscribe(
      response =>{
        console.log(response)
        this.utenti = response
        this.numUtenti = this.utenti.length
      }
    )

  }


}


