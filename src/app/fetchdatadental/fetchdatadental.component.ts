import { DentalUser } from './../dental-user';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
//import { DentalUser } from '../dental-user';

@Component({
  selector: 'app-fetchdatadental',
  templateUrl: './fetchdatadental.component.html',
  styleUrls: ['./fetchdatadental.component.css']
})
export class FetchdatadentalComponent implements OnInit {

  user: DentalUser = new DentalUser();
  activeUser: any = null;
  reason: string = '';//Get user reason, on Modal window

  showModal: boolean;
  config: any;
  userData: any = [];
  showModal1: boolean=false;
  constructor(private userRegistration: RegistrationService, private _router: Router) {
    this.userRegistration.getDentalData().subscribe(data => {
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


  public approvealForm2(user) {
    this.userRegistration.updateStatusOfD(user).subscribe(
      data => {
        alert("Approved Successfully");
        this.showModal1=false;
        let curl = this._router.url;
        
        this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this._router.navigate([curl]);
        });
      },
      error => {
        
        alert("Unsuccessfull");
        this.showModal1=false;
      }

    )

  }
  public rejectForm2() {
    if (this.reason.length > 0) {
      let getActiveUserInfo = this.activeUser;
      getActiveUserInfo.reason = this.reason;
      this.userRegistration.rejectStatusOfD(getActiveUserInfo).subscribe(
        data => {
          
          alert("Rejected Successfully");
         this.showModal1=false;
          let curl = this._router.url;
          this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this._router.navigate([curl]);
          });
        },
        error => { 
          
          alert("Unsuccessfull") 
          this.showModal1=false;
         
        }
      )
    }
  }

  ngOnInit(): void {

  }
  progressBar(){
    this.showModal1=true;
  }


}
