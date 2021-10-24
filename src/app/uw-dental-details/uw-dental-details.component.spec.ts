import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwDentalDetailsComponent } from './uw-dental-details.component';

describe('UwDentalDetailsComponent', () => {
  let component: UwDentalDetailsComponent;
  let fixture: ComponentFixture<UwDentalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwDentalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwDentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
