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
      "adminname": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z\s]*')]),
      "adminemail": new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      "adminid": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9_.-]*')]),
    });



    
  }

  createAdmin() {
    this._service.createAdminFromRemote(this.createAd).subscribe(
    data=>{
      console.log("registered successfully");
      this.msg1="Registered Successfully";
    },
    error=>{
      console.error("exception occurred")
      this.msg1="Already Exist"
    }
    );


    

}

get adminname() {return this.createadmin.get('adminname');}
get adminemail() {return this.createadmin.get('adminemail');}
get adminid() {return this.createadmin.get('adminid');}


}
