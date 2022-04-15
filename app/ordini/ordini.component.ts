import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Categoria} from "../categorie/categorie.component";
import {DettaglioArticolo} from "../clienti/clienti.component";
import {ClienteService} from "../services/cliente.service";



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
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent implements OnInit {

  utente:Utente
  email:string=''

  constructor(private router:Router,private route:ActivatedRoute,private utenteService:ClienteService) { }

  ngOnInit(): void {

    this.email = this.route.snapshot.params['email']

    this.utenteService.findUtente(this.email).subscribe(
      response => {
        this.utente = response
      }
    )

  }

}
