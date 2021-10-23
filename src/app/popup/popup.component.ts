import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class POPUPComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{age:string},public matDialogRef:MatDialogRef<POPUPComponent>) { }

  ngOnInit(): void {
     
  }

  ngOnDestroy(){
    this.matDialogRef.close();
  }

}
