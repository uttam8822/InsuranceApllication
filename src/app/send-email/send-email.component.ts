import { Component, OnInit,Inject } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Data, Router } from '@angular/router';
import { User } from '../user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:number) { 
  
  }
   
  ngOnInit(): void {

  }

   
 

}
