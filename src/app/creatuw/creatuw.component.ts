import { Uwriter } from './../uwriter';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Route} from '@angular/router';
import { Router } from '@angular/router';
import {CompileMetadataResolver} from '@angular/compiler';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-creatuw',
  templateUrl: './creatuw.component.html',
  styleUrls: ['./creatuw.component.css']
})
export class CreatuwComponent implements OnInit {
  uwriter=new Uwriter();
  msg1:String='';
  private formSubmitAttempt: boolean;

  constructor(private _service: RegistrationService, private _route: Router) { }


  createunderwriter : any;
  ngOnInit(): void {

    this.createunderwriter = new FormGroup({
      "underwritername": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "underwriteremail": new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      "underwriterid": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9_.-]*')]),
      "underwriterpassword": new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('[A-Za-z0-9@#]*')])
    });
  }
  
  submitted  = false;

  createUw() {
   // this.submitted = true;
   // if(this.createunderwriter.invalid){
     // this.validateAllFormFields(this.createunderwriter);
     // return;}


    this._service.registerUwriter(this.uwriter).subscribe(
    data=>{
      console.log("registered successfully");
      this.msg1="Registered Successfully";
    },
    error=>{
      console.error("exception occurred")
      this.msg1="Please Fill Form Correctly or Id Already Exist(try with another id)"
    }
    );
  }

  // isFieldValid(field: string) {
  //   return (
  //     (!this.createunderwriter.get(field).valid && this.createunderwriter.get(field).touched) ||
  //     (this.createunderwriter.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }

  // displayFieldCss(field: string) {
  //   return {
  //     'has-error': this.isFieldValid(field),
  //     'has-feedback': this.isFieldValid(field)
  //   };
  // }


get underwritername() {return this.createunderwriter.get('underwritername');}
get underwriteremail() {return this.createunderwriter.get('underwriteremail');}
get underwriterid() {return this.createunderwriter.get('underwriterid');}
get underwriterpassword() {return this.createunderwriter.get('underwriterpassword');}

// validateAllFormFields(formGroup: FormGroup) {

//   Object.keys(formGroup.controls).forEach(field => {

//     console.log(field);

//     const control = formGroup.get(field);



//     if (control instanceof FormControl) {

//       control.markAsTouched({ onlySelf: true });

//     } else if (control instanceof FormGroup) {

//       this.validateAllFormFields(control);

//     }

//   });

//}

}
