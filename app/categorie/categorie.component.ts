import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../services/categoria.service";
import {Articoli} from "../articolo/articolo.component";
import {Router} from "@angular/router";

export class Categoria {
  constructor(

    public categoria:string
  ) {
  }
}


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private categoria:CategoriaService,private router:Router) { }

  categorie:Categoria[]
  numCategorie:number=0;
  articolo:Articoli[]
  numArt:number

  ngOnInit(): void {

    this.categoria.getCategorie().subscribe(
      response =>{
        console.log(response)
        this.categorie = response
        this.numCategorie =  this.categorie.length
      }
    )
  }

  carica (cat:string){

         this.router.navigate(['articolo',cat])

  }


}
