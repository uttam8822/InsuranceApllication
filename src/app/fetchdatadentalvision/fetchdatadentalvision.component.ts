import { DVRegistration } from './../dv-registration';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router,Route } from '@angular/router';
@Component({
  selector: 'app-fetchdatadentalvision',
  templateUrl: './fetchdatadentalvision.component.html',
  styleUrls: ['./fetchdatadentalvision.component.css']
})
export class FetchdatadentalvisionComponent implements OnInit {
user:DVRegistration=new DVRegistration();
  config:any;
  userData:any=[];
  activeUser :any= null;
  reason: string = '';//Get user reason, on Modal window
  showModal: boolean;

  constructor(private userRegistration:RegistrationService,private _router:Router){
    this.userRegistration.getDentalVisionData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });
  }

  show(user){
    this.showModal = true; // Show-Hide Modal Check
    this.activeUser = user; // Preserving user info for later use
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }



    public approvealForm1(user){

      this.userRegistration.updateStatusOfDV(user).subscribe(
    
        data=>{
              
             alert("Approved successfully");
             let curl=this._router.url;
             this._router.navigateByUrl('/',{skipLocationChange: true}).then(()=>{
             this._router.navigate([curl]);
             });
    
        },
    
         error=>{
    
           alert("Unsuccessfull");
    
         }
      )
      }
      public rejectForm1(){
        let getActiveUserInfo = this.activeUser;
      getActiveUserInfo.reason = this.reason;
        this.userRegistration.rejectStatusOfDV(getActiveUserInfo).subscribe(
          data=>{
            alert("Rejected Successfully");
            let curl=this._router.url;
            this._router.navigateByUrl('/',{skipLocationChange: true}).then(()=>{
            this._router.navigate([curl]);
            });
          },
          error=>{alert("Unsuccessfull")}
        )
      }
    
    
  ngOnInit(): void {
  }

}
