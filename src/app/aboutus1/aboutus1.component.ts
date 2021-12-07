import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAuthGuard } from '../Auth/user-auth.guard';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-aboutus1',
  templateUrl: './aboutus1.component.html',
  styleUrls: ['./aboutus1.component.css']
})
export class Aboutus1Component implements OnInit {
  id: any;
  userdata: any;

  constructor(private _service: RegistrationService, private _route: Router, private matDialog: MatDialog, private auth: UserAuthGuard) {
    this.id=localStorage.getItem("email");
    this._service.userDetails(this.id).subscribe(
      data=>{
        console.log("Response");
        console.log(data);
        this.userdata=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
