import { User } from './../user';
import { LifeRegistration } from './../life-registration';
import { LifeComponent } from './../life/life.component';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-fetchdatalife',
  templateUrl: './fetchdatalife.component.html',
  styleUrls: ['./fetchdatalife.component.css']
})
export class FetchdatalifeComponent implements OnInit {
  user: LifeRegistration = new LifeRegistration();
  config: any;
  value: string = "Approve";
  userData: any = [];
  activeUser: any = null;
  reason: string = '';//Get user reason, on Modal window
  showModal: boolean;
  al: boolean;
  showModal1: boolean;

  constructor(private userRegistration: RegistrationService, private _router: Router) {
    this.userRegistration.getLifeData().subscribe(data => {
      console.log(data);
      this.userData = data;

    });

  }
  show(user) {
    this.showModal = true; // Show-Hide Modal Check
    this.activeUser = user; // Preserving user info for later use

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }




  user1 = new LifeRegistration();
  msg = '';

  alert: boolean = false;
  alert1: boolean = false;

  public approvealForm(user) {

    this.userRegistration.updateStatusOfLife(user).subscribe(

      data => {

        alert("Approved  Successfully");
        this.showModal1=false;
        let curl = this._router.url;
        this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this._router.navigate([curl]);
        });
      },
      error => {
        this.showModal1=false;
        alert("Unsuccessfull");
      

      }
    )
  }
  public rejectForm() {
    if (this.reason.length > 0) {
      let getActiveUserInfo = this.activeUser;
      getActiveUserInfo.reason = this.reason;
      this.userRegistration.rejectStatusOfLife(getActiveUserInfo).subscribe(
        data => {
          alert("Rejected Successfully");
          this.showModal1=false;
          this.activeUser = null
          let curl = this._router.url;
          this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this._router.navigate([curl]);
          });
        },
        error => {
          this.showModal1=false;
          alert("Unsuccessfull") }
      )
    }
  }
  public detailsForm() {
    this.userRegistration.getLifeData().subscribe(data => {
      console.log(data);
      this.userData = data;
    })
  }

  ngOnInit(): void {

  }
  progressBar(){
    this.showModal1=true;
  }
}
