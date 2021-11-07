import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {


  name:any;
  finalNameOfUser:any;

  constructor() { }

  ngOnInit(): void {
    this.name=localStorage.getItem("email");
     this.finalNameOfUser=this.name.split("@",1);
  }

}
