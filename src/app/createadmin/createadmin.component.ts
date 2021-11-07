import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {

  constructor(private _service: RegistrationService, private _route: Router) { }
  createAd=new Admin();
  msg1:string='';
  createadmin : any;
  ngOnInit(): void {

    this.createadmin = new FormGroup({
      "adminname": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "adminemail": new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      "adminid": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9_.-]*')]),
      "adminpassword": new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('[A-Za-z0-9@#]*')])
    });
  }

  private formSubmitAttempt: boolean;
  submitted  = false;

  createAdmin() {
    // this.submitted = true;
    // if(this.createadmin.invalid){
    //   this.validateAllFormFields(this.createadmin);
    //   return;}


    this._service.createAdminFromRemote(this.createAd).subscribe(
    data=>{
      console.log("registered successfully");
      this.msg1="Registered Successfully";
    },
    error=>{
      console.error("exception occurred")
      this.msg1="Please Fill Form Correctly or Id Already Exist(try with another id"
    }
    );
}
// isFieldValid(field: string) {
//   return (
//     (!this.createadmin.get(field).valid && this.createadmin.get(field).touched) ||
//     (this.createadmin.get(field).untouched && this.formSubmitAttempt)
//   );
// }

// displayFieldCss(field: string) {
//   return {
//     'has-error': this.isFieldValid(field),
//     'has-feedback': this.isFieldValid(field)
//   };
// }


get adminname() {return this.createadmin.get('adminname');}
get adminemail() {return this.createadmin.get('adminemail');}
get adminid() {return this.createadmin.get('adminid');}
get adminpassword() {return this.createadmin.get('adminpassword');}

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

// }
}
