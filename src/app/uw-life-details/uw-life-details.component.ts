import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-uw-life-details',
  templateUrl: './uw-life-details.component.html',
  styleUrls: ['./uw-life-details.component.css']
})
export class UwLifeDetailsComponent implements OnInit {

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
