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

  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService,private _router: Router){
    this.userRegistration.getDentalData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }

  
  
 public approvealForm2(user){
  this.userRegistration.updateStatusOfD(user).subscribe(
    data=>{
         alert("updated successfully");
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
  public rejectForm2(user){
    this.userRegistration.rejectStatusOfD(user).subscribe(
      data=>{
        alert("Updated Successfully");
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
