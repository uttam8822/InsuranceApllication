import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Admin } from './admin';
import { Uwriter } from './uwriter';
import {DentalUser} from './dental-user'
import {LifeRegistration} from './life-registration'
import { DVRegistration } from './dv-registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

   

  constructor(private _http : HttpClient) { }

  //for dental service
  public applyUserForDental(user:DentalUser):Observable<any>{
    return this._http.post<any>("http://localhost:8067/registeruserservice",user);
    }

  //for life service  
  public applyUserForLife(user:LifeRegistration):Observable<any>{
    return this._http.post<any>("http://localhost:8067/registerlifeservice",user);
    }


    //for dental and vision service
    public applyUserForDVService(user:DVRegistration):Observable<any>{
      return this._http.post<any>("http://localhost:8067/registerdentalvisionservice",user);
      }

  //fetch dental data
  getDentalData():Observable<object>{
    return this._http.get("http://localhost:8067/getdentaldata");
  }    

  //fetch life data
  getLifeData():Observable<object>{
    let apiurl ="http://localhost:8067/getlifedata";
    return this._http.get(apiurl);
  }  

  //fetch data dental vision
  getDentalVisionData(){
    let apiurl ="http://localhost:8067/getdentalvisiondata";
    return this._http.get(apiurl);
  } 
  
   //update dental application status
   updateStatusOfLife(user:LifeRegistration):Observable<object>{
     console.log(user.firstName);
     return this._http.put(`http://localhost:8067/status/user`,user);
   }
    rejectStatusOfLife(user:LifeRegistration):Observable<object>{
    console.log(user.firstName);
    return this._http.put(`http://localhost:8067/status1/user`,user);
  }
  updateStatusOfDV(user:DVRegistration):Observable<object>{
    console.log(user.firstName);
    return this._http.put(`http://localhost:8067/statusdv/user`,user);
  }
   rejectStatusOfDV(user:DVRegistration):Observable<object>{
   console.log(user.firstName);
   return this._http.put(`http://localhost:8067/status1dv/user`,user);
 }

 updateStatusOfD(user:DentalUser):Observable<object>{
  console.log(user.firstName);
  return this._http.put(`http://localhost:8067/statusd/user`,user);
}
 rejectStatusOfD(user:DentalUser):Observable<object>{
 console.log(user.firstName);
 return this._http.put(`http://localhost:8067/status1d/user`,user);
}
getUserData():Observable<object>{
  return this._http.get("http://localhost:8067/userdetails");
}    
getUWData():Observable<object>{
  return this._http.get("http://localhost:8067/uwdetails");
} 


   
  public loginUserFromRemote(user:User):Observable<any>{
  return this._http.post<any>("http://localhost:8067/login",user);
  }
  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8067/registeruser",user);
  }
  public loginAdminFromRemote(admin:Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8067/adlogin",admin);
    }

    public createAdminFromRemote(admin:Admin):Observable<any>{
      return this._http.post<any>("http://localhost:8067/createadmin",admin);
      }
  public registerUwriter(uwriter:Uwriter):Observable<any>{
    return this. _http.post<any>("http://localhost:8067/createUW",uwriter);
  }
  public loginUwriter(uwriter:Uwriter):Observable<any>{
    return this. _http.post<any>("http://localhost:8067/uwlogin",uwriter);
  }
}

