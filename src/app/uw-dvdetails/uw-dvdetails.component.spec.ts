import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwDVDetailsComponent } from './uw-dvdetails.component';

describe('UwDVDetailsComponent', () => {
  let component: UwDVDetailsComponent;
  let fixture: ComponentFixture<UwDVDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwDVDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwDVDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
