import { DentalUser } from './../dental-user';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './../registration.service';

@Component({
  selector: 'app-uw-dental-details',
  templateUrl: './uw-dental-details.component.html',
  styleUrls: ['./uw-dental-details.component.css']
})
export class UwDentalDetailsComponent implements OnInit {

  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService ){
    this.userRegistration.getDentalData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }

  ngOnInit(): void {
  }

}
