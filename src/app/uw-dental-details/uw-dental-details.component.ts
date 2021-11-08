import { DentalUser } from './../dental-user';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './../registration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uw-dental-details',
  templateUrl: './uw-dental-details.component.html',
  styleUrls: ['./uw-dental-details.component.css']
})
export class UwDentalDetailsComponent implements OnInit {

  user = new DentalUser();
  config:any;
  id:any;
  userData:any=[];

  constructor(private userRegistration:RegistrationService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['aadhar'];
    //console.log(this.id);
    this.userRegistration.getDentalDataByID(this.id).subscribe(data=>{
      console.log(data);
      this.userData=new Array(data);
     
    });
  }

}
