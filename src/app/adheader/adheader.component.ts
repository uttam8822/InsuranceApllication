import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UwriterAuthGuard } from '../Auth/uwriter-auth.guard';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-adheader',
  templateUrl: './adheader.component.html',
  styleUrls: ['./adheader.component.css']
})
export class AdheaderComponent implements OnInit {
id:any;
userdata:any;
name:any;
  @Output() public sidenavToggle = new EventEmitter();
  constructor(
    private _service: RegistrationService, private _route: Router, private matDialog: MatDialog, private auth: UwriterAuthGuard) {
      this.id=localStorage.getItem("adid");
    this._service. adDetails(this.id).subscribe(
      data => {
      this.userdata=data;
      console.log(this.userdata)
      this.name=this.userdata.fullName.split(" ",1);
      
      //console.log(this.userdata)

    })
     }

  ngOnInit(): void {
  }

  //function for sidenav toggle
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
