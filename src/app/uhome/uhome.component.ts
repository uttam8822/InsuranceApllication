import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.css']
})
export class UhomeComponent implements OnInit {

  constructor() { }

   
  name:any;
  finalNameOfUser:any;
  ngOnInit(): void {
     this.name=localStorage.getItem("email");
     this.finalNameOfUser=this.name.split("@",1);
  }

}
