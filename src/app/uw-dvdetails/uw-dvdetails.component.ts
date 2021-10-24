import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-uw-dvdetails',
  templateUrl: './uw-dvdetails.component.html',
  styleUrls: ['./uw-dvdetails.component.css']
})
export class UwDVDetailsComponent implements OnInit {

  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService){
    this.userRegistration.getDentalVisionData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }

  ngOnInit(): void {
  }

}
