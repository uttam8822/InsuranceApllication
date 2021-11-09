import { LifeRegistration } from './../life-registration';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uw-life-details',
  templateUrl: './uw-life-details.component.html',
  styleUrls: ['./uw-life-details.component.css']
})
export class UwLifeDetailsComponent implements OnInit {
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
