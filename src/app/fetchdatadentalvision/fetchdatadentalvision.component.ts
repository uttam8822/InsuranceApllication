import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router,Route } from '@angular/router';
@Component({
  selector: 'app-fetchdatadentalvision',
  templateUrl: './fetchdatadentalvision.component.html',
  styleUrls: ['./fetchdatadentalvision.component.css']
})
export class FetchdatadentalvisionComponent implements OnInit {

  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService,private _router:Router){
    this.userRegistration.getDentalVisionData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });
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
      public rejectForm1(user){
        this.userRegistration.rejectStatusOfDV(user).subscribe(
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
