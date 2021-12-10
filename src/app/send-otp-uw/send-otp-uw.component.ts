import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-send-otp-uw',
  templateUrl: './send-otp-uw.component.html',
  styleUrls: ['./send-otp-uw.component.css']
})
export class SendOtpUwComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router) { }
  user = new User();
  user2=new User();
  msg = '';
  msg1='';
  msg2='';
  alert: boolean = false;
  alert1: boolean = false;

  alert3:boolean=false;
  alert4:boolean=false;
  alert5:boolean=false;
  alert6:boolean=false;
  isClicked1:boolean=false;
  isClicked2:boolean=false;
  isClicked3:boolean=false;
  ngOnInit(): void {

  }

  loadingBar1(){
    this.isClicked1=true;
  }

  loadingBar2(){
    this.isClicked2=true;
  }
 

  loadingBar3(){
    this.isClicked3=true;
  }
  sendOTPUser() {
    this._service.sendOTPEmailUser(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg = "OTP sent successfull";
        this.alert = true;
        this.alert1 = false;
        this.isClicked1=false;

      },
      error => {
        console.error("exception occour");
        this.msg = "It seems you are not a valid user please check your email";
        this.alert = false;
        this.alert1 = true;
        this.isClicked1=false;

      }

    );
  }

  verifyOTPUser() {
    this._service.verifyOTPOfUser(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg1 = "Verification Done Check Your Email For Password";
        this.alert3 = true;
        this.alert4 = false;
        this.isClicked2=false;

      },
      error => {
        console.error("exception occour");
        this.msg1 = "It seems your OTP is not valid please check your email";
        
        this.alert3 = false;
        this.alert4 = true;
        this.isClicked2=false;

      }

    );
  }

//add service remaining
  resetYourPassword() {
    this._service.verifyOTPOfUser(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg2 = "Password reset successfull";
        this.alert5 = true;
        this.alert6 = false;
        this.isClicked3=false;

      },
      error => {
        console.error("exception occour");
        this.msg2 = "It seems your OTP is not valid please check your email";
        
        this.alert5 = false;
        this.alert6 = true;
        this.isClicked3=false;

      }

    );
  }
  
}
