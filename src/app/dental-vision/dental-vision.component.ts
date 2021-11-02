
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { DVRegistration } from '../dv-registration';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; 
import { POPUPComponent } from '../popup/popup.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';




@Component({
  selector: 'app-dental-vision',
  templateUrl: './dental-vision.component.html',
  styleUrls: ['./dental-vision.component.css']
})
export class DentalVisionComponent implements OnInit {

  submitted = false;
  @ViewChild('scroll') scroll:ElementRef;

 private formSubmitAttempt: boolean;
 DentalVisionForm:any;
 emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
 constructor(private _service:RegistrationService,private _route: Router,private matDialog:MatDialog) { }

 selectGender:string='';
     selectedDay:string ='';
     selectPlaneYear:string='';
     cancelExixting:string='';
     groupInsuranceUser:string='';
     selectTobacco:string='';
     oralOperationUser:string='';
     selectCavity:string='';
     selectGlasses:string='';
     selectEyeDisses:string='';
     selectEyeOperation:string='';
  
 selectChangeHandler(event:any){
  this.selectedDay=event.target.value;
  if(this.selectedDay=="Individual"){
    this.onOpenDialogClick("Your yearly policy will be Rs-10000/- would you like to proceed.");
  }
  if(this.selectedDay=="Individual & Spouse"){
   this.onOpenDialogClick("Your yearly policy will be Rs-20000/- would you like to proceed.");
 }
 
 if(this.selectedDay=="Individual Spouse & Child"){
   this.onOpenDialogClick("Your yearly policy will be Rs-30000/- would you like to proceed.");
 }
 if(this.selectedDay=="Individual Spouse & Parents"){
   this.onOpenDialogClick("Your yearly policy will be Rs-40000/- would you like to proceed.");
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
 //oral operation
 selectOralHandler(event:any){
 this.oralOperationUser=event.target.value;
 }
 //select cavity
 selectCavityHandler(event:any){
  this.selectCavity=event.target.value;
  }
  // select wear glasses
  selectGlassesHandler(event:any){
    this.selectGlasses=event.target.value;
    }
  //select eye Disease
  selectEyeDiseaseHandler(event:any){
    this.selectEyeDisses=event.target.value;
    }
  //eye operation
  selectEyeOperationsHandler(event:any){
    this.selectEyeOperation=event.target.value;
    }  


  ngOnInit(): void {
    
    this.DentalVisionForm = new FormGroup({
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
      "state": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "gender": new FormControl("",[Validators.required,Validators.pattern('[?:MALE\bmale|female\bFEMALE]*')]),
      "selectPlane": new FormControl('',[Validators.required,Validators.pattern('[1-5]')]),
      "Tobacco": new FormControl('',[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "anyCavity": new FormControl('',[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "anyEyeDisease": new FormControl('',[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "wearGlasses": new FormControl('',[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "groupInsurance": new FormControl('',[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "anyEyeOperation": new FormControl('',[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "oralOperation": new FormControl('',[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "lastDentalCkeck": new FormControl(null,[Validators.required,Validators.pattern('[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}')]),
      "cancellingInsurance": new FormControl("",[Validators.required,Validators.pattern('[?:YES\byes|NO\bno]*')]),
     "healthIssue"   : new FormControl(null),
      "dateOfBirth": new FormControl(null,[Validators.required,Validators.pattern('[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}')]),
      "occupation" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "additionalComments"   : new FormControl(null),
      "member": new FormControl("", Validators.required)
    });
  }
  isFieldValid(field: string) {

    return (

      (!this.DentalVisionForm.get(field).valid && this.DentalVisionForm.get(field).touched) ||

      (this.DentalVisionForm.get(field).untouched && this.formSubmitAttempt)

    );

  }



  displayFieldCss(field: string) {

    return {

      'has-error': this.isFieldValid(field),

      'has-feedback': this.isFieldValid(field)

    };

  }
  get firstname() {return this.DentalVisionForm.get('firstname');}
  get lastname() {return this.DentalVisionForm.get('lastname');}
  get middlename() {return this.DentalVisionForm.get('middlename');}
  get pannumber() {return this.DentalVisionForm.get('pannumber');}
  get aadhar() {return this.DentalVisionForm.get('aadhar');}
  get email() {return this.DentalVisionForm.get('email');}
  get zipcode() {return this.DentalVisionForm.get('zipcode');}
  get city() {return this.DentalVisionForm.get('city');}
  get contact() {return this.DentalVisionForm.get('contact');}
  get income() {return this.DentalVisionForm.get('income');}
  get address() {return this.DentalVisionForm.get('address');}
  get occupation() {return this.DentalVisionForm.get('occupation');}
  get state() {return this.DentalVisionForm.get('state');}
  get dateOfBirth() {return this.DentalVisionForm.get('dateOfBirth');}
  get selectPlane() {return this.DentalVisionForm.get('selectPlane');}
  get gender() {return this.DentalVisionForm.get('gender');}
  get healthIssue() {return this.DentalVisionForm.get('healthIssue');}
  get Tobacco() {return this.DentalVisionForm.get('Tobacco');}
  get groupInsurance() {return this.DentalVisionForm.get('groupInsurance');}
  get cancellingInsurance() {return this.DentalVisionForm.get('cancellingInsurance');}
  get oralOperation() {return this.DentalVisionForm.get('oralOperation');}
  get lastDentalCkeck() {return this.DentalVisionForm.get('lastDentalCkeck');}
  get anyCavity() {return this.DentalVisionForm.get('anyCavity');}
  get wearGlasses() {return this.DentalVisionForm.get('wearGlasses');}
  get anyEyeDisease() {return this.DentalVisionForm.get('anyEyeDisease');}
  get anyEyeOperation() {return this.DentalVisionForm.get('anyEyeOperation');}
  get additionalComments() {return this.DentalVisionForm.get('additionalComments');}
  get member() {return this.DentalVisionForm.get('member');}
  user = new DVRegistration();
  applyDVService(){
    this.submitted = true;
    if(this.DentalVisionForm.invalid){
      this.validateAllFormFields(this.DentalVisionForm);
      return;}
    // if (this.DentalVisionForm.valid) {

    //   console.log('form submitted');

    // } else {

    //   this.validateAllFormFields(this.DentalVisionForm);

    // }
    //for dental and vision

if(this.user.oralOperation=="No" && this.user.anyCavity=="No" && this.user.tobacco=="No" && this.user.anyEyeOperation=="No")
{
  this.user.status="Yes"
}
    this._service.applyUserForDVService(this.user).subscribe(
      data=>{
        console.log("response received");
        this._route.navigate(["/success"])
      },
      error => 
      {
        console.log("exception occred")
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
    scrollTop(){
      this.scroll.nativeElement.scrollTop = 0 ;
    }

}


