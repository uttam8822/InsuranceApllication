import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAuthGuard } from '../Auth/user-auth.guard';
import { RegistrationService } from '../registration.service';
import { POPUPComponent } from '../popup/popup.component';
 

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {


  name: any;
  finalNameOfUser: any;
  id: any;
  userdata: any;
  FirstLetter:string;
  LastLetter:string;
  finalShort:string;
  StartLetter:string;
  
  constructor(private _service: RegistrationService, private _route: Router, private matDialog: MatDialog, private auth: UserAuthGuard) {
    this.id=localStorage.getItem("email");
    this._service.userDetails(this.id).subscribe(
      data=>{
        console.log("Response");
        console.log(data);
        this.userdata=data;
        this.StartLetter=this.userdata.firstName.toUpperCase();
        this.FirstLetter=this.userdata.firstName.charAt(0).toUpperCase();
        this.LastLetter=this.userdata.lastName.charAt(0).toUpperCase();
        this.finalShort=this.FirstLetter+this.LastLetter;
      }
    )
  }
  

  ngOnInit(): void {
    this.name = localStorage.getItem("email");
    this.finalNameOfUser = this.name.split("@", 1);
  }

  onOpenDialogClick() {
    this.matDialog.open(POPUPComponent, {
       
      height: "250px",
      width: "600px",

    });

}
}
