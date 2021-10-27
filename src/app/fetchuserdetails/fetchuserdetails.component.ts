import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetchuserdetails',
  templateUrl: './fetchuserdetails.component.html',
  styleUrls: ['./fetchuserdetails.component.css']
})
export class FetchuserdetailsComponent implements OnInit {
userData:any=[];
  constructor(private service:RegistrationService,) {
    this.service.getUserData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });
   }

  ngOnInit(): void {
  }

}
