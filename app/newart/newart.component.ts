import { Component, OnInit } from '@angular/core';
import {ApiMessage} from "../articolo/articolo.component";
import {ArticoliServiceService} from "../services/articoli-service.service";
import {Router} from "@angular/router";
import {Categoria} from "../categorie/categorie.component";


export class DettaglioArticolo{


  constructor(
    public cpu:string,
  public ram:string,
  public scheda_video:string,
  public display:string,
  public so:string,
  public hd:string

  )
  {}
}

export class Articolii {
  constructor(
    public id:number,
    public nome:string,
    public descrizione:string,
    public quantita:number,
    public prezzo:number,
    public categoria:Categoria,
    public image:string,
    public dettaglioArticolo:DettaglioArticolo

  )
  {}
}


@Component({
  selector: 'app-newart',
  templateUrl: './newart.component.html',
  styleUrls: ['./newart.component.css']
})
export class NewartComponent implements OnInit {

  articolo:Articolii
  messaggio:string=''
  errore:string=''
  apiMsg:ApiMessage

  constructor(private articoliService:ArticoliServiceService,private router:Router) { }




  ngOnInit() {


    this.articolo = new Articolii(-1,"","",0,0,new Categoria(""),"",
      new DettaglioArticolo("","","","","",""));


  }

  salva (){
    this.articoliService.addArticolo(this.articolo).subscribe(
      response =>
      {
        this.apiMsg = response
        this.messaggio = this.apiMsg.message

      },
      error => {
        this.errore = error.error.messaggio
      }
    )
  }


}
