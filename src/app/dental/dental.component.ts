import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import {DentalUser} from '../dental-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dental',
  templateUrl: './dental.component.html',
  styleUrls: ['./dental.component.css']
})
export class DentalComponent implements OnInit {

  Dental:any;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  
    yearList:any =['1','2','3','4','5'];

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
     
   

  constructor(private _service:RegistrationService,private _route: Router) { }
  
    

  ngOnInit(): void {

     
    this.Dental = new FormGroup({
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
      "occupation": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "Tobacco": new FormControl(null,[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "groupInsurance": new FormControl(null,[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "cancellingInsurance": new FormControl(null,[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
     // "gender": new FormControl(null,[Validators.required,Validators.pattern('[?:male\bMALE|female\bFEMALE]*')]),
      "state": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "selectPlane": new FormControl(null,[Validators.required,Validators.pattern('[1-5]')]),
      "healthIssue"   : new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern('[A-Za-z0-9]*')]),
      "additionalComments"   : new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern('[A-Za-z0-9]*')]),
      "dateOfBirth": new FormControl(null,[Validators.required,Validators.pattern('[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}')]),
      //selectPlane: new FormControl('', Validators.required)
    });
  }
 
  get f(){
    return this.Dental.controls;
  }


  get firstname() {return this.Dental.get('firstname');}
  get lastname() {return this.Dental.get('lastname');}
  get middlename() {return this.Dental.get('middlename');}
  get pannumber() {return this.Dental.get('pannumber');}
  get aadhar() {return this.Dental.get('aadhar');}
  get email() {return this.Dental.get('email');}
  get zipcode() {return this.Dental.get('zipcode');}
  get city() {return this.Dental.get('city');}
  get contact() {return this.Dental.get('contact');}
  get income() {return this.Dental.get('income');}
  get address() {return this.Dental.get('address');}
  get occupation() {return this.Dental.get('occupation');}
  get Tobacco() {return this.Dental.get('Tobacco');}
  get groupInsurance() {return this.Dental.get('groupInsurance');}
  get cancellingInsurance() {return this.Dental.get('cancellingInsurance');}
  get state() {return this.Dental.get('state');}
  get dateOfBirth() {return this.Dental.get('dateOfBirth');}
  get selectPlane() {return this.Dental.get('selectPlane');}
  get gender() {return this.Dental.get('gender');}
  get healthIssue() {return this.Dental.get('healthIssue');}
  get additionalComments() {return this.Dental.get('additionalComments');}

   user = new DentalUser();

  

  applyDental(){

    this._service.applyUserForDental(this.user).subscribe(
      data=>{
        console.log("response received");
        console.log(this.Dental.value);
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


