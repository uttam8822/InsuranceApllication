import { LifeRegistration } from './../life-registration';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-uw-life-details',
  templateUrl: './uw-life-details.component.html',
  styleUrls: ['./uw-life-details.component.css']
})
export class UwLifeDetailsComponent implements OnInit {
user:LifeRegistration=new LifeRegistration();
  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService){
    console.log("Hello",this.userData);
   this.userRegistration.getLifeData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }


  ngOnInit(): void {
    console.log("Hello hii",this.userData)
  }

}
