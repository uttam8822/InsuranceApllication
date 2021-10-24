import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-dentalvisiondetails',
  templateUrl: './dentalvisiondetails.component.html',
  styleUrls: ['./dentalvisiondetails.component.css']
})
export class DentalvisiondetailsComponent implements OnInit {

  
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
