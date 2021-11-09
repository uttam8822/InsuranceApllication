import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { DentalUser } from '../dental-user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dentaluserdetails',
  templateUrl: './dentaluserdetails.component.html',
  styleUrls: ['./dentaluserdetails.component.css']
})
export class DentaluserdetailsComponent implements OnInit {
  user = new DentalUser();
  config: any;
  id: any;
  userData: any = [];

  constructor(private userRegistration: RegistrationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['aadhar'];
    //console.log(this.id);
    this.userRegistration.getDentalDataByID(this.id).subscribe(data => {
      console.log(data);
      this.userData = new Array(data);

    });
  }

}
