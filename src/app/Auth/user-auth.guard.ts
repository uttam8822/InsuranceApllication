import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService} from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { map ,take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  user =new User()
  response:boolean=false;
   
  constructor(private _service : RegistrationService, private _route : Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
       if(this.response){
         return true;
       }else{
         alert("Unauthorized Access 😈😈😈😈😈😈 Please login to Enjoy our Services.");
         this._route.navigate(['/login']);
         return false;
       }
          
       
}
  
}


