
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { DVRegistration } from '../dv-registration';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { POPUPComponent } from '../popup/popup.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SendEmailComponent } from '../send-email/send-email.component';




@Component({
  selector: 'app-dental-vision',
  templateUrl: './dental-vision.component.html',
  styleUrls: ['./dental-vision.component.css']
})
export class DentalVisionComponent implements OnInit {

  submitted = false;
  isClicked:boolean=false;
  @ViewChild('scroll') scroll: ElementRef;

  private formSubmitAttempt: boolean;
  DentalVisionForm: any;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  mail: any;
  id: any;
  d1:number=Date.now();
  userdata: any;
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

       _maxDate:any;

  _futureDateDisable() {

    var date:any = new Date();

    var todayDate:any = date.getDate();

    var month:any = date.getMonth() + 1;

      var year:any = date.getFullYear();

      if(todayDate < 10)

      {todayDate = '0' + todayDate;}

      if(month < 10)

      {month = '0' + month;}

       this._maxDate = year + "-" + month + "-" + todayDate;

       console.log(this._maxDate);
      }
  
  selectGender: string = '';
  selectedDay: string = '';
  selectPlaneYear: string = '';
  cancelExixting: string = '';
  groupInsuranceUser: string = '';
  selectTobacco: string = '';
  oralOperationUser: string = '';
  selectCavity: string = '';
  selectGlasses: string = '';
  selectEyeDisses: string = '';
  selectEyeOperation: string = '';
  selectmembermessage: string = '';
  totalPayment:number;


  selectChangeHandler(event: any) {
    this.selectedDay = event.target.value;
    if (this.selectedDay == "Individual" && this.selectEyeOperation == "Yes" && this.oralOperationUser == "Yes") {
      this.totalPayment=11000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual" && (this.selectEyeOperation == "No" && this.oralOperationUser == "Yes") ) {
      this.totalPayment=10500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual" && (this.selectEyeOperation == "Yes" && this.oralOperationUser == "No") ) {
      this.totalPayment=10500;
      this.selectmembermessage ="Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual" && this.selectEyeOperation == "No" && this.oralOperationUser == "No") {
      this.totalPayment=10000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }



    if (this.selectedDay == "Individual & Spouse"  && this.selectEyeOperation == "Yes" && this.oralOperationUser == "Yes") {
      this.totalPayment=21000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual & Spouse"  && (this.selectEyeOperation == "No" && this.oralOperationUser == "Yes")) {
      this.totalPayment=20500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual & Spouse"  && (this.selectEyeOperation == "Yes" && this.oralOperationUser == "No")) {
      this.totalPayment=20500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
   
    if (this.selectedDay == "Individual & Spouse"  && this.selectEyeOperation == "No" && this.oralOperationUser == "No") {
      this.totalPayment=20000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }

    if (this.selectedDay == "Individual Spouse & Child" && this.selectEyeOperation == "Yes" && this.oralOperationUser == "Yes") {
      this.totalPayment=31000;
      this.selectmembermessage ="Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual Spouse & Child" && (this.selectEyeOperation == "No" && this.oralOperationUser == "Yes")) {
      this.totalPayment=30500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual Spouse & Child" && (this.selectEyeOperation == "Yes" && this.oralOperationUser == "No")) {
      this.totalPayment=30500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual Spouse & Child" && this.selectEyeOperation == "No" && this.oralOperationUser == "No") {
      this.totalPayment=30000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }


    if (this.selectedDay == "Individual Spouse & Parents" && this.selectEyeOperation == "Yes" && this.oralOperationUser == "Yes") {
      this.totalPayment=41000;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual Spouse & Parents" && (this.selectEyeOperation == "No" && this.oralOperationUser == "Yes")) {
      this.totalPayment=40500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual Spouse & Parents" && (this.selectEyeOperation == "Yes" && this.oralOperationUser == "No")) {
      this.totalPayment=40500;
      this.selectmembermessage = "Your yearly policy will be Rs-"+this.totalPayment ;
    }
    if (this.selectedDay == "Individual Spouse & Parents" && this.selectEyeOperation == "No" && this.oralOperationUser == "No") {
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
  //oral operation
  selectOralHandler(event: any) {
    this.oralOperationUser = event.target.value;
  }
  //select cavity
  selectCavityHandler(event: any) {
    this.selectCavity = event.target.value;
  }
  // select wear glasses
  selectGlassesHandler(event: any) {
    this.selectGlasses = event.target.value;
  }
  //select eye Disease
  selectEyeDiseaseHandler(event: any) {
    this.selectEyeDisses = event.target.value;
  }
  //eye operation
  selectEyeOperationsHandler(event: any) {
    this.selectEyeOperation = event.target.value;
  }


  ngOnInit(): void {
    this.submitDate();
    this.futureDateDisable();
    this._futureDateDisable();
    this.__nextPremiumDate();
    this.DentalVisionForm = new FormGroup({
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
      "state": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9- ]*')]),
      "gender": new FormControl("", [Validators.required, Validators.pattern('[?:MALE\bmale|female\bFEMALE]*')]),
      "selectPlane": new FormControl('', [Validators.required, Validators.pattern('[1-5]')]),
      "Tobacco": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "anyCavity": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "anyEyeDisease": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "wearGlasses": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "groupInsurance": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "anyEyeOperation": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "oralOperation": new FormControl('', [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]*')]),
      "lastDentalCkeck": new FormControl(null, [Validators.required]),
      "cancellingInsurance": new FormControl("", [Validators.required, Validators.pattern('[?:YES\byes|NO\bno]*')]),
 
      "dateOfBirth": new FormControl(null, [Validators.required]),
      "occupation": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "member": new FormControl("", Validators.required),
      
      "bankAccountNumber": new FormControl(null, [Validators.required, Validators.maxLength(18), Validators.minLength(9), Validators.pattern('[0-9]*')]),

      "bankName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),

      "ifscCode":new FormControl(null, [Validators.required, Validators.pattern('[[A-Z]{4}0[0-9]{6}]*')]),

      "additionalComments": new FormControl('', [Validators.pattern('[a-zA-Z]*')]),
    });
    this.mail=localStorage.getItem("email");
    this.user.email=this.mail;
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
  get firstname() { return this.DentalVisionForm.get('firstname'); }
  get lastname() { return this.DentalVisionForm.get('lastname'); }
  get middlename() { return this.DentalVisionForm.get('middlename'); }
  get pannumber() { return this.DentalVisionForm.get('pannumber'); }
  get aadhar() { return this.DentalVisionForm.get('aadhar'); }
  get email() { return this.DentalVisionForm.get('email'); }
  get zipcode() { return this.DentalVisionForm.get('zipcode'); }
  get city() { return this.DentalVisionForm.get('city'); }
  get contact() { return this.DentalVisionForm.get('contact'); }
  get income() { return this.DentalVisionForm.get('income'); }
  get address() { return this.DentalVisionForm.get('address'); }
  get occupation() { return this.DentalVisionForm.get('occupation'); }
  get state() { return this.DentalVisionForm.get('state'); }
  get dateOfBirth() { return this.DentalVisionForm.get('dateOfBirth'); }
  get selectPlane() { return this.DentalVisionForm.get('selectPlane'); }
  get gender() { return this.DentalVisionForm.get('gender'); }
  
  get Tobacco() { return this.DentalVisionForm.get('Tobacco'); }
  get groupInsurance() { return this.DentalVisionForm.get('groupInsurance'); }
  get cancellingInsurance() { return this.DentalVisionForm.get('cancellingInsurance'); }
  get oralOperation() { return this.DentalVisionForm.get('oralOperation'); }
  get lastDentalCkeck() { return this.DentalVisionForm.get('lastDentalCkeck'); }
  get anyCavity() { return this.DentalVisionForm.get('anyCavity'); }
  get wearGlasses() { return this.DentalVisionForm.get('wearGlasses'); }
  get anyEyeDisease() { return this.DentalVisionForm.get('anyEyeDisease'); }
  get anyEyeOperation() { return this.DentalVisionForm.get('anyEyeOperation'); }
  
  get member() { return this.DentalVisionForm.get('member'); }
  
  get bankAccountNumber() { return this.DentalVisionForm.get('bankAccountNumber'); }

  get bankName() { return this.DentalVisionForm.get('bankName'); }

  get ifscCode() { return this.DentalVisionForm.get('ifscCode'); }

  get additionalComments() { return this.DentalVisionForm.get('additionalComments'); }
  user = new DVRegistration();

  //apply dental vision service
  applyDVService() {
    this.submitted = true;
    if (this.DentalVisionForm.invalid) {
      this.validateAllFormFields(this.DentalVisionForm);
      this.isClicked=false;
      return;
    }
  
    this._service.applyUserForDVService(this.user).subscribe(
      data => {
        console.log("response received");
        this.isClicked=false;
        this._route.navigate(["/success"])
      },
      error => {
        console.log("exception occred")
        this.isClicked=false;
        // alert("Please fill all Reqiured feild mark with (*).");
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
  scrollTop() {
    this.scroll.nativeElement.scrollTop = 0;
  }
  formProgress(){
    this.isClicked=true;
   }
   _todayDate: any;
   submitDate() {

    var date:any = new Date();

    var todayDate:any = date.getDate();

    var month:any = date.getMonth() + 1;

      var year:any = date.getFullYear();

      if(todayDate < 10)

      {todayDate = '0' + todayDate;}

      if(month < 10)

      {month = '0' + month;}

       this._todayDate = todayDate + "/" + month + "/" + year;

       console.log(this._todayDate);}




  nextPremiumDate:any;
  __nextPremiumDate() {

    var date:any = new Date();

    var todayDate:any = date.getDate();

    var month:any = date.getMonth() + 1;

      var year:any = date.getFullYear() +1;

      if(todayDate < 10)

      {todayDate = '0' + todayDate;}

      if(month < 10)

      {month = '0' + month;}

       this.nextPremiumDate = todayDate + "/" + month + "/" + year;

       console.log(this.nextPremiumDate );}

   paymentPopUp(){
    this.matDialog.open(SendEmailComponent, {

       

      height: "250px",

      width: "630px",
      data:this.totalPayment

    });
  }

}


