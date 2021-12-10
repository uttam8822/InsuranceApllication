import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private formSubmitAttempt: boolean;
  user = new User();
  msg = '';

  showHideBtn:string='Show Password';
  showPass:boolean=false;
  result:boolean=false;

  alert: boolean = false;
  alert1: boolean = false;
  isActive:boolean;
  submitted = false;
  SignupForm: any;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  constructor(private _service: RegistrationService, private _router: Router) {

  }
  maxDate:any;

  futureDateDisable() {

    var date:any = new Date();

    var todayDate:any = date.getDate();

    var month:any = date.getMonth() + 1;

      var year:any = date.getFullYear() - 18;

      if(todayDate < 10)

      {todayDate = '0' + todayDate;}

      if(month < 10)

      {month = '0' + month;}

       this.maxDate = year + "-" + month + "-" + todayDate;

       console.log(this.maxDate);}
  


  ngOnInit(): void  { 
    this.futureDateDisable();
    this.SignupForm= new FormGroup({
      "firstname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9@#!]*')]),
      "cpassword": new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9@#!]*')]),
      "dateOfBirth": new FormControl(null, [Validators.required])

    });
  }
  isFieldValid(field: string) {

    return (

      (!this.SignupForm.get(field).valid && this.SignupForm.get(field).touched) ||

      (this.SignupForm.get(field).untouched && this.formSubmitAttempt)

    );

  }



  displayFieldCss(field: string) {

    return {

      'has-error': this.isFieldValid(field),

      'has-feedback': this.isFieldValid(field)

    };

  }

  get firstname() { return this.SignupForm.get('firstname'); }
  get lastname() { return this.SignupForm.get('lastname'); }
  get email() { return this.SignupForm.get('email'); }
  get password() { return this.SignupForm.get('password'); }
  get cpassword() { return this.SignupForm.get('cpassword'); }
  get dateOfBirth() { return this.SignupForm.get('dateOfBirth'); }


  //signup function for user

  registerUser() {
    this.submitted=true;
    if (this.SignupForm.invalid) {
      this.validateAllFormFields(this.SignupForm);
      return;
    }
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg = "Registration successfull";
        this.alert = true;
        this.alert1 = false;

      },
      error => {
        console.error("exception occour");
        this.msg = "user already exist go to login";
        this.alert = false;
        this.alert1 = true;

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

