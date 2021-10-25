import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user =new User()
   //password=new User()
   msg='';
  alert:boolean=false;
  alert1:boolean=false;

  constructor(private _service : RegistrationService, private _route : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
        this._service.loginUserFromRemote(this.user).subscribe(
          data => {console.log("response received");
          this.msg="login success"
          this. _route.navigate(["/service1"])
        },
          error => {
            console.error("exception occour");
            this.msg="Bad credentials, Please enter valid email and password";
           // this.alert=false;
            //this.alert1=true;
            this. _route.navigate(["/login"])
        }
          
        );   
  }

  gotoregistration(){
    this._route.navigate(['/signup'])
  }

}