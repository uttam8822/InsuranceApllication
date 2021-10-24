import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-uwsidelist',
  templateUrl: './uwsidelist.component.html',
  styleUrls: ['./uwsidelist.component.css']
})
export class UWSidelistComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
