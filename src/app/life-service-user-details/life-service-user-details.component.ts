import { LifeRegistration } from './../life-registration';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-life-service-user-details',
  templateUrl: './life-service-user-details.component.html',
  styleUrls: ['./life-service-user-details.component.css']
})
export class LifeServiceUserDetailsComponent implements OnInit {
  user = new LifeRegistration();
  config: any;
  id: any;
  userData: any = [];

  constructor(private userRegistration: RegistrationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['aadhar'];
    //console.log(this.id);
    this.userRegistration.getLifeDataByID(this.id).subscribe(data => {
      console.log(data);
      this.userData = new Array(data);

    });
  }
}
