import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Uwriter } from '../uwriter';
import { CompileMetadataResolver } from '@angular/compiler';
import {Route} from '@angular/router';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'; 
import { POPUPComponent } from '../popup/popup.component';
import { UwriterAuthGuard } from '../Auth/uwriter-auth.guard';

@Component({
  selector: 'app-uwlogin',
  templateUrl: './uwlogin.component.html',
  styleUrls: ['./uwlogin.component.css']
})
export class UwloginComponent implements OnInit {
  uwriter=new Uwriter();
  msg:string='';
  forgot='Forgot your password? Please contact to our customer support at(support@impetus.com).';

  constructor(private _service: RegistrationService, private _route: Router,private matDialog:MatDialog,private auth:UwriterAuthGuard) { }

  ngOnInit(): void {
  }
  loginUw() {
    this._service.loginUwriter(this.uwriter).subscribe(
    data=>{
      console.log("registered successfully");
      this.msg="Login Successfully";
      this.auth.response=true;
      this. _route.navigate(["/uwriterhome"]);
    },
    error=>{
      console.error("exception occurred")
      this.auth.response=false;
      this.msg="Bad Credentials";
    }
    );
  }

  onOpenDialogClick(forgot){
    this.matDialog.open(POPUPComponent,{
        data:{
          age:forgot
        },
        height:"250px",
        width:"600px",
        
   
      });

       
      
}
}
