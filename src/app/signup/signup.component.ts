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
  user = new User();
  msg = '';
<<<<<<< HEAD
  showHideBtn:string='Show Password';
  showPass:boolean=false;
  result:boolean=false;   

=======
>>>>>>> 8382f8afc960f3d7c5b209efedb7dc070c9adbb5
  alert: boolean = false;
  alert1: boolean = false;
  isActive:boolean;

  SignupForm: any;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  constructor(private _service: RegistrationService, private _router: Router) {

  }

  ngOnInit(): void {
    this.SignupForm = new FormGroup({
      "firstname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9@#!]*')]),
      "cpassword": new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9@#!]*')])

    });
  }

  get firstname() { return this.SignupForm.get('firstname'); }
  get lastname() { return this.SignupForm.get('lastname'); }
  get email() { return this.SignupForm.get('email'); }
  get password() { return this.SignupForm.get('password'); }
  get cpassword() { return this.SignupForm.get('cpassword'); }


  //signup function for user

  registerUser() {
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

  showPassword(){
    if (this.showPass==false) {
      this.result=true;
      this.showHideBtn="Hide Password";
      this.showPass=true;
    }else{
      this.result=false;
      this.showHideBtn="Show Password";
      this.showPass=false;
    }
    
     
   
  }

  
   

}

