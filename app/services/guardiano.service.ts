import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class GuardianoService implements CanActivate{

  constructor(private loginService:LoginService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(!this.loginService.isLogged()){
      this.router.navigate(['login']);
      return false;
    }
    else {
      return true;
    }
  }
}
