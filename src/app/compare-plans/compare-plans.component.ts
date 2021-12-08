import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { POPUPComponent } from '../popup/popup.component';
@Component({
  selector: 'app-compare-plans',
  templateUrl: './compare-plans.component.html',
  styleUrls: ['./compare-plans.component.css']
})
export class ComparePlansComponent implements OnInit {



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
