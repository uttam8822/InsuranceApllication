import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDiaBoxService {

  constructor(private dialog:MatDialog) { }


  openConfimDialog(){
    this.dialog.open(ConfirmDialogComponent,{
         width:'390px',
         disableClose:true
    });
  }
}
