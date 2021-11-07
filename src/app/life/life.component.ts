import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LifeRegistration} from '../life-registration'
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { POPUPComponent } from '../popup/popup.component';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  @ViewChild('scroll') scroll:ElementRef;

  

  private formSubmitAttempt: boolean;
  al:boolean=false;

  selectGender:string='';
     selectedDay:string ='';
     selectPlaneYear:string='';
     cancelExixting:string='';
     groupInsuranceUser:string='';
     selectTobacco:string='';
     selectHIV:string='';
     selectLungsIssue='';
     selectmembermessage: String ='';

  selectChangeHandler(event:any){
    this.selectedDay=event.target.value;
    if(this.selectedDay=="Individual"){
      this.selectmembermessage = "Your yearly policy will be Rs-10000/-";
    }
    if(this.selectedDay=="Individual & Spouse"){
     this.selectmembermessage ="Your yearly policy will be Rs-20000/-";
   }

   if(this.selectedDay=="Individual Spouse & Child"){
     this.selectmembermessage="Your yearly policy will be Rs-30000/-";
   }
   if(this.selectedDay=="Individual Spouse & Parents"){
     this.selectmembermessage ="Your yearly policy will be Rs-40000/-";
   }
  }

//for select plane
selectPlanHandler(event:any){
  this.selectPlaneYear=event.target.value;
 }

 //for gender
 selectGenderHandler(event:any){
  this.selectGender=event.target.value;
 }
 //for cancel exixting insurance
 selectCancelHandler(event:any){
  this.cancelExixting=event.target.value;
 }

 //for group insurance
 selectGroupInsuranceHandler(event:any){
   this.groupInsuranceUser=event.target.value;
 }

 //for tobacco
 selectTobaccoHandler(event:any){
  this.selectTobacco=event.target.value;
 }
//select HIV
 selectHIVHandler(event:any){
  this.selectHIV=event.target.value;
 }
 //select Lungs issue

 selectLungHandler(event:any){
  this.selectLungsIssue=event.target.value;
 }
















  LifeForm : any;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  submitted=false;
  constructor(private _service:RegistrationService,private _route: Router,private matDialog:MatDialog) { }

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
      "state": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9- ]*')]),
      "selectPlane": new FormControl('',[Validators.required,Validators.pattern('[1-5]')]),
      "gender": new FormControl("",[Validators.required,Validators.pattern('[?:male\bMALE|female\bFEMALE]*')]),
      "Tobacco": new FormControl("",[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "groupInsurance": new FormControl("",[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "cancellingInsurance": new FormControl("",[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "hivIssue": new FormControl("",[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "lungDisease": new FormControl("",[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "additionalComments"   : new FormControl(null),
      "healthIssue"   : new FormControl(null),
      "dateOfBirth": new FormControl("",[Validators.required,Validators.pattern('[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}')]),
      "member": new FormControl("", Validators.required)
    });
  }
  isFieldValid(field: string) {

    return (

      (!this.LifeForm.get(field).valid && this.LifeForm.get(field).touched) ||

      (this.LifeForm.get(field).untouched && this.formSubmitAttempt)

    );

  }



  displayFieldCss(field: string) {

    return {

      'has-error': this.isFieldValid(field),

      'has-feedback': this.isFieldValid(field)

    };

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
  get member() {return this.LifeForm.get('member');}

  user = new LifeRegistration();

  applyLife(){
    this.submitted = true;
    if(this.LifeForm.invalid){
      this.validateAllFormFields(this.LifeForm);
      return;
    }
    
   
    this._service.applyUserForLife(this.user).subscribe(
      data=>{
        console.log("response received");
       this._route.navigate(["/success"])
      },
      error =>
      {
        console.log("exception occred");
       // alert("Please fill all Reqiured feild mark with (*).");
      }


    );

  }

  onOpenDialogClick(msg:string){
    this.matDialog.open(POPUPComponent,{
        data:{
          age:msg
        },
        height:"250px",
        width:"600px",

      });
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
      //method to reach on top on clear button press
      scrollTop(){
        this.scroll.nativeElement.scrollTop = 0 ;
      }

      // scrollToMiddle(){
      //   this.scroll.nativeElement.scrollTop = 0 ;
      // }
}
