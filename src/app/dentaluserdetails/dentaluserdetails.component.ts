import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { DentalUser } from '../dental-user';

@Component({
  selector: 'app-dentaluserdetails',
  templateUrl: './dentaluserdetails.component.html',
  styleUrls: ['./dentaluserdetails.component.css']
})
export class DentaluserdetailsComponent implements OnInit {

  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService){
    this.userRegistration.getDentalData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }

  ngOnInit(): void {
  }

}
