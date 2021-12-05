import { Component, OnInit } from '@angular/core';
import { POPUPComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onOpenDialogClick() {
    this.matDialog.open(POPUPComponent, {
       
      height: "250px",
      width: "600px",

    });

}
}
