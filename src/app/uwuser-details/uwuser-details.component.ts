import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-uwuser-details',
  templateUrl: './uwuser-details.component.html',
  styleUrls: ['./uwuser-details.component.css']
})
export class UWuserDetailsComponent implements OnInit {

  userData: any = [];
  constructor(private service: RegistrationService,) {
    this.service.getUserData().subscribe(data => {
      console.log(data);
      this.userData = data;

    });
  }

  ngOnInit(): void {
  }

}
