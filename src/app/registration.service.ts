import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Admin } from './admin';
import { Uwriter } from './uwriter';
import { DentalUser } from './dental-user'
import { LifeRegistration } from './life-registration'
import { DVRegistration } from './dv-registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  constructor(private _http: HttpClient) { }

  //for dental service
  public applyUserForDental(user: DentalUser): Observable<any> {
    return this._http.post<any>("http://localhost:8067/registeruserservice", user);
  }

  //for life service  
  public applyUserForLife(user: LifeRegistration): Observable<any> {
    return this._http.post<any>("http://localhost:8067/registerlifeservice", user);
  }


  //for dental and vision service
  public applyUserForDVService(user: DVRegistration): Observable<any> {
    return this._http.post<any>("http://localhost:8067/registerdentalvisionservice", user);
  }

  //fetch dental data
  getDentalData(): Observable<object> {
    return this._http.get("http://localhost:8067/getdentaldata");
  }

  //fetch life data
  getLifeData(): Observable<object> {
    return this._http.get("http://localhost:8067/getlifedata");
  }

  //fetch data dental vision
  getDentalVisionData() {
    let apiurl = "http://localhost:8067/getdentalvisiondata";
    return this._http.get(apiurl);
  }

  //GET DENTAL DETA BY ID
  getDentalDataByID(id): Observable<object> {
    return this._http.get(`http://localhost:8067/getdentaldatabyID/${id}`);
  }

  //GET life DETA BY ID
  getLifeDataByID(id): Observable<object> {
    return this._http.get(`http://localhost:8067/getlifedatabyID/${id}`);
  }

  //GET DENTAL VISION DETA BY ID
  getDvDataByID(id): Observable<object> {
    return this._http.get(`http://localhost:8067/getdvdatabyID/${id}`);
  }

    //user details
    public userDetails(id):Observable<object> {
      return this._http.get(`http://localhost:8067/getuser/${id}`);
    }
    //history
  public userHistory(id):Observable<object> {
    return this._http.get(`http://localhost:8067/getlifedatabymail/${id}`);
  }
  public userHistory2(id):Observable<object> {
    return this._http.get(`http://localhost:8067/getdvdatabymail/${id}`);
  }
  public userHistory3(id):Observable<object> {
    return this._http.get(`http://localhost:8067/getdentaldatabymail/${id}`);
  }

  //update dental application status
  updateStatusOfLife(user: LifeRegistration): Observable<object> {
    console.log(user.firstName);
    return this._http.put(`http://localhost:8067/status/user`, user);
  }
  //reject status of life service
  rejectStatusOfLife(user: LifeRegistration): Observable<object> {
    console.log(user.firstName);
    return this._http.put(`http://localhost:8067/status1/user`, user);
  }

  //update status of Dental Vision service
  updateStatusOfDV(user: DVRegistration): Observable<object> {
    console.log(user.firstName);
    return this._http.put(`http://localhost:8067/statusdv/user`, user);
  }

  //reject status of dental vision service
  rejectStatusOfDV(user: DVRegistration): Observable<object> {
    console.log(user.firstName);
    return this._http.put(`http://localhost:8067/status1dv/user`, user);
  }
  //update status of Dental  service
  updateStatusOfD(user: DentalUser): Observable<object> {
    console.log(user.firstName);
    return this._http.put(`http://localhost:8067/statusd/user`, user);
  }

  //reject status of dental service
  rejectStatusOfD(user: DentalUser): Observable<object> {
    console.log(user.firstName);
    return this._http.put(`http://localhost:8067/status1d/user`, user);
  }

  //get data of user
  getUserData(): Observable<object> {
    return this._http.get("http://localhost:8067/userdetails");
  }

  //get data of life
  getUWData(): Observable<object> {
    return this._http.get("http://localhost:8067/uwdetails");
  }


  //login user
  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8067/login", user);
  }

  //register user
  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8067/registeruser", user);
  }

  //send email
  public sendEmailFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8067/sendmail", user);
  }

  //send email UW
  public sendEmailUWFromRemote(user: Uwriter): Observable<any> {
    return this._http.post<any>("http://localhost:8067/sendmailUW", user);
  }

  //send email admin
  public sendEmailAdminFromRemote(user:Admin):Observable<any> {
    return this._http.post<any>("http://localhost:8067/sendmailadmin", user);
  }

  // send approve email Life User
  public sendEmailApproveLife(user: LifeRegistration): Observable<any> {
    return this._http.post<any>("http://localhost:8067/sendApproveEmailLifeUser", user);
  }

//send OTP user for password reset
public sendOTPEmailUser(user: User): Observable<any> {
  return this._http.post<any>("http://localhost:8067/sendmailOTP", user);
}
//reset password
public verifyOTPOfUser1(user: User): Observable<any> {
  return this._http.put<any>("http://localhost:8067/update?pass="+user.password+"&email="+user.emailId+"&token="+user.otpOfUser, user);
}
//verify otp of user
public verifyOTPOfUser(user: User): Observable<any> {
  return this._http.post<any>("http://localhost:8067/verifyOTPOfUser123", user);
}

//send OTP user for password reset
public sendOTPEmailUser1(user: Admin): Observable<any> {
  return this._http.post<any>("http://localhost:8067/sendmailOTP1", user);
}
//reset password
public verifyOTPOfUser3(user: Admin): Observable<any> {
  return this._http.put<any>("http://localhost:8067/update1?pass="+user.password+"&email="+user.emailId+"&token="+user.otpOfUser, user);
}
//verify otp of user
public verifyOTPOfUser2(user: Admin): Observable<any> {
  return this._http.post<any>("http://localhost:8067/verifyOTPOfUser1234", user);
}


//send OTP user for password reset
public sendOTPEmailUser2(user: Uwriter): Observable<any> {
  return this._http.post<any>("http://localhost:8067/sendmailOTP2", user);
}
//reset password
public verifyOTPOfUser4(user: Uwriter): Observable<any> {
  return this._http.put<any>("http://localhost:8067/update2?pass="+user.password+"&email="+user.emailId+"&token="+user.otpOfUser, user);
}
//verify otp of user
public verifyOTPOfUser5(user: Uwriter): Observable<any> {
  return this._http.post<any>("http://localhost:8067/verifyOTPOfUser12345", user);
}


  //login admin
  public loginAdminFromRemote(admin: Admin): Observable<any> {
    return this._http.post<any>("http://localhost:8067/adlogin", admin);
  }

  //create admin
  public createAdminFromRemote(admin: Admin): Observable<any> {
    return this._http.post<any>("http://localhost:8067/createadmin", admin);
  }

  // create under writer
  public registerUwriter(uwriter: Uwriter): Observable<any> {
    return this._http.post<any>("http://localhost:8067/createUW", uwriter);
  }
  //login under writer
  public loginUwriter(uwriter: Uwriter): Observable<any> {
    return this._http.post<any>("http://localhost:8067/uwlogin", uwriter);
  }
}

