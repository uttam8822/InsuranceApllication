import { LifeRegistration } from './../life-registration';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-life-service-user-details',
  templateUrl: './life-service-user-details.component.html',
  styleUrls: ['./life-service-user-details.component.css']
})
export class LifeServiceUserDetailsComponent implements OnInit {
user:LifeRegistration=new LifeRegistration();
  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService){
    this.userRegistration.getLifeData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }

  ngOnInit(): void {
  }

}
