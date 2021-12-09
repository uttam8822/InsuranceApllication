import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LifeComponent } from '../life/life.component';
import { RegistrationService } from '../registration.service';
import { LifeRegistration } from '../life-registration';
import { Service1Component } from '../service1/service1.component'; 
import { POPUPComponent } from '../popup/popup.component';
import { DentalComponent } from '../dental/dental.component';
import { DentalUser } from '../dental-user';
import { DVRegistration } from '../dv-registration';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 mail:any;
 user:LifeRegistration = new LifeRegistration();
 user1:DentalUser=new DentalUser();
 user3:DVRegistration=new DVRegistration();
 datadv:any;
 datalife:any;
 datadental:any;
 userdata: any;
  FirstLetter:string;
  LastLetter:string;
  finalShort:string;
  StartLetter:string;

  firstName:string;
  lastName:string;
  email:string;
  
  constructor(private _service: RegistrationService, private _route: Router, private matDialog: MatDialog) { 
    this.mail=localStorage.getItem("email");
  this._service.userHistory(this.mail).subscribe(
    data=>{
      console.log(data);
      this.datalife=data;
      console.log(this.datalife.lastName);
    });
    this._service.userHistory2(this.mail).subscribe(
      data1=>{
        console.log(data1);
        this.datadv=data1;
      
        console.log(this.datadv.firstName);
      
      });
      this._service.userHistory3(this.mail).subscribe(
        data2=>{
          console.log(data2);
          this.datadental=data2;
          console.log(this.datadental.firstName);
     
        });
   
        this.mail=localStorage.getItem("email");
       this._service.userDetails(this.mail).subscribe(
      data=>{
        console.log("Response");
        console.log(data);
        this.userdata=data;
        this.StartLetter=this.userdata.firstName.toUpperCase();
        this.FirstLetter=this.userdata.firstName.charAt(0).toUpperCase();
        this.LastLetter=this.userdata.lastName.charAt(0).toUpperCase();
        this.finalShort=this.FirstLetter+this.LastLetter;
        this.firstName=this.userdata.firstName;
        this.lastName=this.userdata.lastName;
        this.email=this.userdata.emailId;
      }
    )
 
  }
  onOpenDialogClick() {

    this.matDialog.open(POPUPComponent, {

       

      height: "250px",

      width: "600px",



    });

}

  ngOnInit(): void {
  }

}
