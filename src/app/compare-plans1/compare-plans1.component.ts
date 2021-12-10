import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { POPUPComponent } from '../popup/popup.component';

@Component({
  selector: 'app-compare-plans1',
  templateUrl: './compare-plans1.component.html',
  styleUrls: ['./compare-plans1.component.css']
})
export class ComparePlans1Component implements OnInit {

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

