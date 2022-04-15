import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId = ''
  password = ''
  autenticato = true
  errorMessage = 'Spiacente la userId e la password sono errati'
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }


  gestAut(){
    this.loginService.autenticaService(this.userId, this.password).subscribe(
      data => {
        console.log(data);
        this.autenticato = true;
        this.router.navigate(['welcome'])
      },
      error =>{
        console.log(error);
        this.autenticato = false;
      }
    )
  }

}
