import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-send-otp-admin',
  templateUrl: './send-otp-admin.component.html',
  styleUrls: ['./send-otp-admin.component.css']
})
export class SendOtpAdminComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router)  { }
  user = new Admin();
   private formSubmitAttempt:boolean;
  msg = '';
  msg1='';
  msg2='';
  submitted:boolean=false;
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
    this._service.sendOTPEmailUser1(this.user).subscribe(
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
    this._service.verifyOTPOfUser2(this.user).subscribe(
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
    if (this.otpAdmin.invalid) {
      this.validateAllFormFields(this.otpAdmin);
      this.isClicked3=false;
      return;
    }
    this._service.verifyOTPOfUser3(this.user).subscribe(
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
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  otpAdmin:any;
  ngOnInit(): void {

this.otpAdmin = new FormGroup(
  {'email' : new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
  'changePassword' : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
  }
)
  }
  isFieldValid(field: string) {

    return (

      (!this.otpAdmin.get(field).valid && this.otpAdmin.get(field).touched) ||

      (this.otpAdmin.get(field).untouched && this.formSubmitAttempt)

    );

  }

  
  displayFieldCss(field: string) {

    return {

      'has-error': this.isFieldValid(field),

      'has-feedback': this.isFieldValid(field)

    };

  }

  get email() { return this.otpAdmin.get('email'); }
  get changePassword() { return this.otpAdmin.get('changePassword'); }


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
