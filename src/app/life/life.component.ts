import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LifeRegistration} from '../life-registration'
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {
  

  selectedDay:string ='';

  selectChangeHandler(event:any){
    this.selectedDay=event.target.value;
    if(this.selectedDay=="Individual"){
      alert("Your Yearly policy will be Rs-50000/- whould you like to proceed");
    }
    if(this.selectedDay=="Individual & Spouse"){
     alert("Your Yearly policy will be Rs-40000/- whould you like to proceed");
   }
   if(this.selectedDay=="Individual"){
     alert("Your Yearly policy will be Rs-30000/- whould you like to proceed");
   }
   if(this.selectedDay=="Individual Spouse & Child"){
     alert("Your Yearly policy will be Rs-20000/- whould you like to proceed");
   }
   if(this.selectedDay=="Individual Spouse & Parents"){
     alert("Your Yearly policy will be Rs-10000/- whould you like to proceed");
   }
  }
  LifeForm : any;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  constructor(private _service:RegistrationService,private _route: Router) { }

  ngOnInit(): void {
    this.LifeForm = new FormGroup({
      "firstname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "middlename" : new FormControl(null,[Validators.pattern('[a-zA-Z]*')]),
      "pannumber" : new FormControl(null,[Validators.required,Validators.pattern('[[A-Z]{5}[0-9]{4}[A-Z]{1}]*')]),
      "aadhar"    : new FormControl(null, [Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('[0-9]*')]),
      "email"     : new FormControl(null,[Validators.required,Validators.pattern(this.emailPattern)]),
      "zipcode"   : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]*')]),
      "city": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "contact": new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]),
      "income" : new FormControl(null, [Validators.required,Validators.maxLength(2),Validators.pattern('[0-9]*')]),
      "address" : new FormControl(null,[Validators.required]),
      "occupation" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "state": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "selectPlane": new FormControl(null,[Validators.required,Validators.pattern('[1-5]')]),
      "gender": new FormControl(null,[Validators.required,Validators.pattern('[?:male\bMALE|female\bFEMALE]*')]),
      "Tobacco": new FormControl(null,[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "groupInsurance": new FormControl(null,[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "cancellingInsurance": new FormControl(null,[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "hivIssue": new FormControl(null,[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "lungDisease": new FormControl(null,[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "additionalComments"   : new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern('[A-Za-z0-9]*')]),
      "healthIssue"   : new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern('[A-Za-z0-9]*')]),
      "dateOfBirth": new FormControl(null,[Validators.required,Validators.pattern('[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}')])
   
    });
  }

  get firstname() {return this.LifeForm.get('firstname');}
  get lastname() {return this.LifeForm.get('lastname');}
  get middlename() {return this.LifeForm.get('middlename');}
  get pannumber() {return this.LifeForm.get('pannumber');}
  get aadhar() {return this.LifeForm.get('aadhar');}
  get email() {return this.LifeForm.get('email');}
  get zipcode() {return this.LifeForm.get('zipcode');}
  get city() {return this.LifeForm.get('city');}
  get contact() {return this.LifeForm.get('contact');}
  get income() {return this.LifeForm.get('income');}
  get address() {return this.LifeForm.get('address');}
  get occupation() {return this.LifeForm.get('occupation');}
  get state() {return this.LifeForm.get('state');}
  get dateOfBirth() {return this.LifeForm.get('dateOfBirth');}
  get selectPlane() {return this.LifeForm.get('selectPlane');}
  get gender() {return this.LifeForm.get('gender');}
  get healthIssue() {return this.LifeForm.get('healthIssue');}
  get Tobacco() {return this.LifeForm.get('Tobacco');}
  get groupInsurance() {return this.LifeForm.get('groupInsurance');}
  get cancellingInsurance() {return this.LifeForm.get('cancellingInsurance');}
  get hivIssue() {return this.LifeForm.get('hivIssue');}
  get lungDisease() {return this.LifeForm.get('lungDisease');}
  get additionalComments() {return this.LifeForm.get('additionalComments');}

  user = new LifeRegistration();
  applyLife(){

    this._service.applyUserForLife(this.user).subscribe(
      data=>{
        console.log("response received");
        this._route.navigate(["/success"])
      },
      error => 
      {
        console.log("exception occred")
        alert("Please fill all Reqiured feild mark with (*).");
      }  
      
      
    );

  }
}
