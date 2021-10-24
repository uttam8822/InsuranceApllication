import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalvisiondetailsComponent } from './dentalvisiondetails.component';

describe('DentalvisiondetailsComponent', () => {
  let component: DentalvisiondetailsComponent;
  let fixture: ComponentFixture<DentalvisiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalvisiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalvisiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
