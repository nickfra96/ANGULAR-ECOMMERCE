import { Component, OnInit } from '@angular/core';
import {Categoria} from "../categorie/categorie.component";
import {ArticoliServiceService} from "../services/articoli-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriaService} from "../services/categoria.service";

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

export class Articoli {
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

export class ApiMessage {
  constructor(
    public code:string,
    public message:string
  )
  {}
}


@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {

  articoli:Articoli[]
  numArt:number=0
  numArtTrovati:number =0
  trovati:boolean = false;
  pagina = 1;
  righe = 4; //visulalizziamo 10 righe  alla  volta
  articolo:Articoli;
  filter:string
  apiMsg:ApiMessage
  messaggio:string
  eliminato:boolean = false
  cat:string=''
artCat:Articoli[]

  constructor(private articolIService:ArticoliServiceService,private route:ActivatedRoute,private router:Router,private categoriaService:CategoriaService,private route2:ActivatedRoute) { }


  ngOnInit() {

    this.filter = this.route.snapshot.params['filter']


    this.articolIService.getArticoli().subscribe(
      response =>
      {
        console.log(response);
        this.articoli = response;
        this.numArt = this.articoli.length
      }
    )

    if  (this.filter != undefined){
      this.getArticoliDesc(this.filter)
    }



  }//ngOnInit


  refresh(){
    this.getArticoliDesc(this.filter)
  }

  refreshALL(){
    this.articolIService.getArticoli().subscribe(
      response =>
      {
        console.log(response);
        this.articoli = response;
        this.numArt = this.articoli.length
      }
    )
  }

  public getArticoliDesc (filter:string){

    this.articolIService.getArticoliDescrizione(filter).subscribe(
      response =>{
        console.log("Ricerchiamo articolo con filtro" +filter)
        this.articoli =response;
        console.log(this.articoli)
        this.numArtTrovati=this.articoli.length
        this.trovati = true;
      }
    )
  }


  elimina (id:number){

    console.log(`Eliminazione articolo ${id}`)
    this.articolIService.delarticoloById(id).subscribe(
      response => {
        console.log(response)
        this.apiMsg= response
        this.messaggio = this.apiMsg.message
        this.eliminato= true
        this.refreshALL();

      }//response
    )

  }

  modifica (id:number){
    console.log(`Modifica articolo $(id)`);
    this.router.navigate(['modart',id]);
  }

  addArt(){
    this.router.navigate(['newart'])
  }



}
