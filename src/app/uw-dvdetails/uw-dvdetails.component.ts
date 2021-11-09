import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { DVRegistration } from '../dv-registration';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-uw-dvdetails',
  templateUrl: './uw-dvdetails.component.html',
  styleUrls: ['./uw-dvdetails.component.css']
})
export class UwDVDetailsComponent implements OnInit {

  user = new DVRegistration();
  config: any;
  id: any;
  userData: any = [];

  constructor(private userRegistration: RegistrationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['aadhar'];
    //console.log(this.id);
    this.userRegistration.getDvDataByID(this.id).subscribe(data => {
      console.log(data);
      this.userData = new Array(data);

    });
  }

}
