import { Component, OnInit } from '@angular/core';
import { RegistrationService} from '../registration.service';
import { Router } from '@angular/router';
import { Uwriter } from '../uwriter';

@Component({
  selector: 'app-sendmail-uw',
  templateUrl: './sendmail-uw.component.html',
  styleUrls: ['./sendmail-uw.component.css']
})
export class SendmailUWComponent implements OnInit {

  constructor(private _service : RegistrationService,private _router :Router) { }
  user=new Uwriter();
  msg='';

  alert:boolean=false;
  alert1:boolean=false;
  
  ngOnInit(): void {
     
  }


   
  sendEmailUW(){
    this._service.sendEmailUWFromRemote(this.user).subscribe(
      data => {console.log("response received");
      this.msg="Email sent successfull";
      this.alert=true;
      this.alert1=false;
      
    },
      error => {
        console.error("exception occour");
       this.msg="It seems you are not a valid user please check your email";
      this.alert=false;
      this.alert1=true;

    }
      
    ); 
  }

}
