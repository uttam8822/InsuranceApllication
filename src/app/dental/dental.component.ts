
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { DentalUser } from '../dental-user';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { POPUPComponent } from '../popup/popup.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SendEmailComponent } from '../send-email/send-email.component';


@Component({
  selector: 'app-dental',
  templateUrl: './dental.component.html',
  styleUrls: ['./dental.component.css']
})
export class DentalComponent implements OnInit {
  //variable created for scroll view
  @ViewChild('scroll') scroll: ElementRef;
  private formSubmitAttempt: boolean;

  mail:any;
  submitted = false;
  isClicked:boolean=false;
  Dental: any;
  totalPayment:number;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";


  selectGender: string = '';
  selectedDay: string = '';
  selectPlaneYear: string = '';
  cancelExixting: string = '';
  groupInsuranceUser: string = '';
  selectTobacco: string = '';

  selectmembermessage: String = '';
  id: any;
  userdata: any;;

  selectChangeHandler(event: any) {
    this.selectedDay = event.target.value;


    if (this.selectedDay == "Individual" && this.selectTobacco == "Yes") {
      this.totalPayment=10500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual" && this.selectTobacco == "No") {
      this.totalPayment=10000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }

    if (this.selectedDay == "Individual & Spouse" && this.selectTobacco == "Yes") {
      this.totalPayment=20500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual & Spouse" && this.selectTobacco == "No") {
      this.totalPayment=20000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }

    if (this.selectedDay == "Individual Spouse & Child" && this.selectTobacco == "Yes") {
      this.totalPayment=30500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual Spouse & Child" && this.selectTobacco == "No") {
      this.totalPayment=30000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual Spouse & Parents" && this.selectTobacco == "Yes") {
      this.totalPayment=40500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }

    if (this.selectedDay == "Individual Spouse & Parents" && this.selectTobacco == "No") {
      this.totalPayment=40000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }


  }


  //for select plane
  selectPlanHandler(event: any) {
    this.selectPlaneYear = event.target.value;
  }

  //for gender
  selectGenderHandler(event: any) {
    this.selectGender = event.target.value;
  }
  //for cancel exixting insurance
  selectCancelHandler(event: any) {
    this.cancelExixting = event.target.value;
  }

  //for group insurance 
  selectGroupInsuranceHandler(event: any) {
    this.groupInsuranceUser = event.target.value;
  }

  //for tobacco
  selectTobaccoHandler(event: any) {
    this.selectTobacco = event.target.value;
  }
  selectMemberHandler(event: any) {
    this.selectTobacco = event.target.value;
  }


  constructor(private _service: RegistrationService, private _route: Router, private matDialog: MatDialog) {
    this.id=localStorage.getItem("email");
    this._service.userDetails(this.id).subscribe(
      data=>{
        console.log("Response");
        console.log(data);
        this.userdata=data;
      }
    )
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
  
  ngOnInit(): void {

    this.futureDateDisable();
    this.Dental = new FormGroup({
      "firstname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "middlename": new FormControl(null, [Validators.pattern('[a-zA-Z]*')]),
      "pannumber": new FormControl(null, [Validators.required, Validators.pattern('[[A-Z]{5}[0-9]{4}[A-Z]{1}]*')]),
      "aadhar": new FormControl(null, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]*')]),
      "email": new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      "zipcode": new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]),
      "city": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "contact": new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')]),
      "income": new FormControl(null, [Validators.required, Validators.maxLength(2), Validators.pattern('[0-9]*')]),
      "address": new FormControl(null, [Validators.required]),
      "occupation": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "Tobacco": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "groupInsurance": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "cancellingInsurance": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]+')]),
      "gender": new FormControl('', [Validators.required, Validators.pattern('[?:male\bMALE|female\bFEMALE]*')]),
      "state": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9-]*')]),
      "selectPlane": new FormControl('', [Validators.required, Validators.pattern('[1-5]')]),
      
      "dateOfBirth": new FormControl(null, [Validators.required]),
      "bankAccountNumber": new FormControl(null, [Validators.required, Validators.maxLength(18), Validators.minLength(9), Validators.pattern('[0-9]*')]),

      

      "ifscCode":new FormControl(null, [Validators.required, Validators.pattern('[[A-Z]{4}0[0-9]{6}]*')]),

      "additionalComments": new FormControl('', [Validators.pattern('[a-zA-Z]*')]),
      //selectPlane: new FormControl('', Validators.required)
      member: new FormControl('', Validators.required),
      "bankName": new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z- ]*')])
    });
    this.mail=localStorage.getItem("email");
    this.user.email=this.mail;
  }
  isFieldValid(field: string) {

    return (

      (!this.Dental.get(field).valid && this.Dental.get(field).touched) ||

      (this.Dental.get(field).untouched && this.formSubmitAttempt)

    );

  }



  displayFieldCss(field: string) {

    return {

      'has-error': this.isFieldValid(field),

      'has-feedback': this.isFieldValid(field)

    };

  }


  get f() {
    return this.Dental.controls;
  }


  get firstname() { return this.Dental.get('firstname'); }
  get lastname() { return this.Dental.get('lastname'); }
  get middlename() { return this.Dental.get('middlename'); }
  get pannumber() { return this.Dental.get('pannumber'); }
  get aadhar() { return this.Dental.get('aadhar'); }
  get email() { return this.Dental.get('email'); }
  get zipcode() { return this.Dental.get('zipcode'); }
  get city() { return this.Dental.get('city'); }
  get contact() { return this.Dental.get('contact'); }
  get income() { return this.Dental.get('income'); }
  get address() { return this.Dental.get('address'); }
  get occupation() { return this.Dental.get('occupation'); }
  get Tobacco() { return this.Dental.get('Tobacco'); }
  get groupInsurance() { return this.Dental.get('groupInsurance'); }
  get cancellingInsurance() { return this.Dental.get('cancellingInsurance'); }
  get state() { return this.Dental.get('state'); }
  get dateOfBirth() { return this.Dental.get('dateOfBirth'); }
  get selectPlane() { return this.Dental.get('selectPlane'); }
  get gender() { return this.Dental.get('gender'); }
 
 
  get member() { return this.Dental.get('member'); }

  get bankAccountNumber() { return this.Dental.get('bankAccountNumber'); }

  get bankName() { return this.Dental.get('bankName'); }

  get ifscCode() { return this.Dental.get('ifscCode'); }

  get additionalComments() { return this.Dental.get('additionalComments'); }
  user = new DentalUser();



  //apply dental application function
  applyDental() {
    this.submitted = true;
    if (this.Dental.invalid) {
      this.validateAllFormFields(this.Dental);
      this.isClicked=false;
      return;
    }

    
    

    this._service.applyUserForDental(this.user).subscribe(
      data => {
        console.log("response received");
        console.log(this.Dental.value);
        this.isClicked=false; 
        this._route.navigate(["/success"])
      },
      error => {
        console.log("exception occred");
        this.isClicked=false; 
      }

    );

  }


  onOpenDialogClick(msg: string) {
    this.matDialog.open(POPUPComponent, {
      data: {
        age: msg
      },
      height: "250px",
      width: "600px",

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

  // method to scroll up on clicking clear button
  scrollTop() {
    this.scroll.nativeElement.scrollTop = 0;
  }

  formProgress(){
   this.isClicked=true;
  }

  paymentPopUp(){
    this.matDialog.open(SendEmailComponent, {

       

      height: "250px",

      width: "630px",
      data:this.totalPayment

    });
  }


}


