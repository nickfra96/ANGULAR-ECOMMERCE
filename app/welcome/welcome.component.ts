import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

export class Articoli {

}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['welcome'])
  }

}
