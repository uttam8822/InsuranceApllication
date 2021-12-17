import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-send-otp-user',
  templateUrl: './send-otp-user.component.html',
  styleUrls: ['./send-otp-user.component.css']
})
export class SendOtpUserComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router) { }
  user = new User();
  user2=new User();
  msg = '';
  msg1='';
  msg2='';
  alert: boolean = false;
  alert1: boolean = false;
  able:boolean=false;
  able1:boolean=false;
  able2:boolean=false;
  alert3:boolean=false;
  alert4:boolean=false;
  alert5:boolean=false;
  alert6:boolean=false;
  isClicked1:boolean=false;
  isClicked2:boolean=false;
  isClicked3:boolean=false;

  step1Enable:boolean=true;
  step2Enable:boolean=true;

  
  otpUser:any;
  ngOnInit(): void {

this.otpUser = new FormGroup(
  {
  'changePassword' : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),

  }
)
  }
  
  get changePassword() { return this.otpUser.get('changePassword'); }



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
        this.able1=true;
        this.step1Enable=false;

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
        this.msg1 = "Verification Done. Go Next For Change Your Password";
        this.alert3 = true;
        this.alert4 = false;
        this.isClicked2=false;
        this.able2=true;
        this.step2Enable=false;

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
  resetYourPassword(e:any) {
    e.preventDefault();
    this._service.verifyOTPOfUser1(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg2 = " Your Password reset successfull login here";
        this.alert5 = true;
        this.alert6 = false;
        this.able=true;
        this.isClicked3=false;

      },
      error => {
        console.error("exception occour");
        this.msg2 = "It seems your OTP is not valid please check your email";

        this.alert5 = false;
        this.alert6 = true;
        this.able=false
        this.isClicked3=false;

      }

    );
  }

}
