import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uwheader',
  templateUrl: './uwheader.component.html',
  styleUrls: ['./uwheader.component.css']
})
export class UWheaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }

}
