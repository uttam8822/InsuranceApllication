import { Component, OnInit } from '@angular/core';
import { DVRegistration } from '../dv-registration';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dentalvisiondetails',
  templateUrl: './dentalvisiondetails.component.html',
  styleUrls: ['./dentalvisiondetails.component.css']
})
export class DentalvisiondetailsComponent implements OnInit {

  
  user = new DVRegistration();
  config:any;
  id:any;
  userData:any=[];

  constructor(private userRegistration:RegistrationService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['aadhar'];
    //console.log(this.id);
    this.userRegistration.getDvDataByID(this.id).subscribe(data=>{
      console.log(data);
      this.userData=new Array(data);
     
    });
  }

}
