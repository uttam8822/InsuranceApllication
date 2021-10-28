import { Component, OnInit } from '@angular/core';
import { RegistrationService} from '../registration.service';
import { Router } from '@angular/router';
import { User} from '../user';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  constructor(private _service : RegistrationService,private _router :Router) { }
  user=new User();
  msg='';

  alert:boolean=false;
  alert1:boolean=false;
  
  ngOnInit(): void {
     
  }


   
  sendEmail(){
    this._service.sendEmailFromRemote(this.user).subscribe(
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
