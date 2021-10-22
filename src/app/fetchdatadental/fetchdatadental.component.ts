import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { DentalUser } from '../dental-user';
 

@Component({
  selector: 'app-fetchdatadental',
  templateUrl: './fetchdatadental.component.html',
  styleUrls: ['./fetchdatadental.component.css']
})
export class FetchdatadentalComponent implements OnInit {

  user:DentalUser=new DentalUser();

  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService,private _route: Router){
    this.userRegistration.getDentalData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }

  clicked:boolean=false;
  
  public dentalApprove(user){
    this.clicked=true;
  this.userRegistration.updateStatusOfDental(user).subscribe(
    data=>{
         alert("updated successfully");
    },
     error=>{
       alert("Unsuccessfull");
     }
    
  )
    
  }
  

  ngOnInit(): void {
     
  }

}
