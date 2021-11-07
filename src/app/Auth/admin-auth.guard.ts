import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService} from '../registration.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private _service : RegistrationService, private _route : Router) { }
  response:boolean=false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.response){
        return true;
      }else{
        alert("Unauthorized Access 😈😈😈😈😈😈 Please login.");
        this._route.navigate(['/adlogin']);
        return false;
      }
  }
  
}
