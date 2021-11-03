import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { DentalUser } from '../dental-user';

@Component({
  selector: 'app-uw-fetch-dental-data',
  templateUrl: './uw-fetch-dental-data.component.html',
  styleUrls: ['./uw-fetch-dental-data.component.css']
})
export class UwFetchDentalDataComponent implements OnInit {

  user:DentalUser=new DentalUser();
  activeUser :any= null;
  reason: string = '';//Get user reason, on Modal window

  showModal: boolean;
  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService,private _router: Router){
    this.userRegistration.getDentalData().subscribe(data=>{
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

  
  
 public approvealForm2(user){
  this.userRegistration.updateStatusOfD(user).subscribe(
    data=>{
         alert("Approved Successfully");
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
  public rejectForm2(){
    let getActiveUserInfo = this.activeUser;
      getActiveUserInfo.reason = this.reason;
    this.userRegistration.rejectStatusOfD(getActiveUserInfo).subscribe(
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
