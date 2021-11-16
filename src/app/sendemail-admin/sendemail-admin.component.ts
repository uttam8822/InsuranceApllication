import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { Admin } from '../admin';
@Component({
  selector: 'app-sendemail-admin',
  templateUrl: './sendemail-admin.component.html',
  styleUrls: ['./sendemail-admin.component.css']
})
export class SendemailAdminComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router) { }
  user = new Admin();
  msg = '';

  alert: boolean = false;
  alert1: boolean = false;
  isClicked:boolean=false;
  
  ngOnInit(): void {

  }

 loadingBar(){
   this.isClicked=true;
 }

  sendEmailAdmin() {
     
    this._service.sendEmailAdminFromRemote(this.user).subscribe(
       
      data => {
         
        console.log("response received");
        this.msg = "Email sent successfull";
        this.alert = true;
        this.alert1 = false;
         this.isClicked=false;

      },
      error => {
        console.error("exception occour");
        this.msg = "It seems you are not a valid user please check your email";
        this.alert = false;
        this.alert1 = true;
         this.isClicked=false;
      }

    );
  }

}
