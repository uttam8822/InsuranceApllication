import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentaluserdetailsComponent } from './dentaluserdetails.component';

describe('DentaluserdetailsComponent', () => {
  let component: DentaluserdetailsComponent;
  let fixture: ComponentFixture<DentaluserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentaluserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentaluserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
