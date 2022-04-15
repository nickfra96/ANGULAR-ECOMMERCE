import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiMessage, Articoli} from "../articolo/articolo.component";
import {ArticoliServiceService} from "../services/articoli-service.service";

@Component({
  selector: 'app-modarticolo',
  templateUrl: './modarticolo.component.html',
  styleUrls: ['./modarticolo.component.css']
})
export class ModarticoloComponent implements OnInit {

  id:number;
  articolo:Articoli;
  messaggio:string = '';
  apiMsg:ApiMessage;
  errore:string = '';

  constructor(private route:ActivatedRoute, private articoliService:ArticoliServiceService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //this.articolo = new Articoli()
    //if (this.id != -1) {


      this.articoliService.getArticoloById(this.id).subscribe(
        response => {
          this.articolo = response;
          console.log(this.articolo);
        },
        error => {
          console.log(error.error.messaggio)

        }
      )
  //  }


  }//ngOnInit

  salva(){
    this.articoliService.updateArticolo(this.articolo).subscribe(
      response =>{
        console.log(response)
        this.apiMsg = response
        this.messaggio = this.apiMsg.message
      },
      error =>{
        this.errore = error.error.messaggio

      }
    )
  }

  back(){
    this.router.navigate(['articolo'])
  }

}
