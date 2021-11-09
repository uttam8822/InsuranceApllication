import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adheader',
  templateUrl: './adheader.component.html',
  styleUrls: ['./adheader.component.css']
})
export class AdheaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  //function for sidenav toggle
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
