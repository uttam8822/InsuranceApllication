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

  constructor(private _service: RegistrationService, private _route: Router) { }


  createunderwriter : any;
  ngOnInit(): void {

    this.createunderwriter = new FormGroup({
      "underwritername": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z\s]*')]),
      "underwriteremail": new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      "underwriterid": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9_.-]*')]),
    });



  }
  
  createUw() {
    this._service.registerUwriter(this.uwriter).subscribe(
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

get underwritername() {return this.createunderwriter.get('underwritername');}
get underwriteremail() {return this.createunderwriter.get('underwriteremail');}
get underwriterid() {return this.createunderwriter.get('underwriterid');}

}
