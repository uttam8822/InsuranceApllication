import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 mail:any;
 datadv:any;
 datalife;any;
 datadental:any;
  constructor(private _service: RegistrationService, private _route: Router, private matDialog: MatDialog) { 
    this.mail=localStorage.getItem("email");
  this._service.userHistory(this.mail).subscribe(
    data=>{
      console.log(data);
      this.datalife=data;
    }
    ) 
    this._service.userHistory2(this.mail).subscribe(
      data1=>{
        console.log(data1);
        this.datadv=data1;
      }
      ) 
      this._service.userHistory3(this.mail).subscribe(
        data2=>{
          console.log(data2);
          this.datadental=data2;
        }
        ) 
  
  
  }

  ngOnInit(): void {
  }

}
