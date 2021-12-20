import { Uwriter } from './../uwriter';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-send-otp-uw',
  templateUrl: './send-otp-uw.component.html',
  styleUrls: ['./send-otp-uw.component.css']
})
export class SendOtpUwComponent implements OnInit {
private  formSubmitAttempt: boolean;

  constructor(private _service: RegistrationService, private _router: Router) { }
  user = new Uwriter();
  user2=new Uwriter();
  submitted:boolean=false;
  msg = '';
  msg1='';
  msg2='';
  alert: boolean = false;
  alert1: boolean = false;
  able:boolean=false
  able1:boolean=false
  able2:boolean=false
  alert3:boolean=false;
  alert4:boolean=false;
  alert5:boolean=false;
  alert6:boolean=false;
  isClicked1:boolean=false;
  isClicked2:boolean=false;
  isClicked3:boolean=false;
  step1Enable:boolean=true;
  step2Enable:boolean=true;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  otpUw:any;
  ngOnInit(): void {

this.otpUw = new FormGroup(
  {'email' : new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
  'changePassword' : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
  }
)
  }

  isFieldValid(field: string) {

    return (

      (!this.otpUw.get(field).valid && this.otpUw.get(field).touched) ||

      (this.otpUw.get(field).untouched && this.formSubmitAttempt)

    );

  }

  
  displayFieldCss(field: string) {

    return {

      'has-error': this.isFieldValid(field),

      'has-feedback': this.isFieldValid(field)

    };

  }



  get email() { return this.otpUw.get('email'); }
  get changePassword() { return this.otpUw.get('changePassword'); }


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
    this._service.sendOTPEmailUser2(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg = "OTP sent successfull";
        this.alert = true;
        this.alert1 = false;
        this.able=true;
        this.isClicked1=false;
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
    this._service.verifyOTPOfUser5(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg1 = "Verification Done. Go Next For Change Your Password";
        this.alert3 = true;
        this.alert4 = false;
        this.able1=true
        this.isClicked2=false;
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
  resetYourPassword() {

    this.submitted=true;
    if (this.otpUw.invalid) {
      this.validateAllFormFields(this.otpUw);
      this.isClicked3=false;
      return;
    }
    this._service.verifyOTPOfUser4(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg2 = "Your Password reset successfull";
        this.alert5 = true;
        this.alert6 = false;
        this.able2=true
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

  validateAllFormFields(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(field => {

      console.log(field);

      const control = formGroup.get(field);



      if (control instanceof FormControl) {

        control.markAsTouched({ onlySelf: true });

      } else if (control instanceof FormGroup) {

        this.validateAllFormFields(control);

      }

    });

  }
  
}
