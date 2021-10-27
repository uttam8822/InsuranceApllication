import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetchuwdetails',
  templateUrl: './fetchuwdetails.component.html',
  styleUrls: ['./fetchuwdetails.component.css']
})
export class FetchuwdetailsComponent implements OnInit {
userData:any=[];
  constructor(private service:RegistrationService) { 
    this.service.getUWData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });
  }

  ngOnInit(): void {
  }

}
