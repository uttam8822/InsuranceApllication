import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { MatDialog } from '@angular/material/dialog'; 
import { POPUPComponent } from '../popup/popup.component';
import { UserAuthGuard } from '../Auth/user-auth.guard';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user =new User()
   //password=new User()
   msg='';
   forgot='Forgot your password? Please contact to our customer support at(support@impetus.com).';
  alert:boolean=false;
  alert1:boolean=false;
  userEmail:string="";

  constructor(private _service : RegistrationService, private _route : Router,private matDialog:MatDialog,private auth:UserAuthGuard) { }

  ngOnInit(): void {
  }

  loginUser(){
        this._service.loginUserFromRemote(this.user).subscribe(
          data => {console.log("response received");
          this.msg="login success"
          this.auth.response=true;
          this.userEmail=this.user.emailId;
          console.log(this.userEmail);
          localStorage.setItem("email",this.userEmail);
          this. _route.navigate(["/service1"])
          
          
        },
          error => {
            console.error("exception occour");
            this.msg="Bad credentials, Please enter valid email and password";
           // this.alert=false;
           //this.alert1=true;
            this.auth.response=false;
            this. _route.navigate(["/login"])
            
        },
       );   
       
  }

  gotoregistration(){
    this._route.navigate(['/signup'])
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