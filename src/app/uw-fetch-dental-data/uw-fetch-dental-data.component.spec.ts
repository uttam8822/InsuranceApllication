import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwFetchDentalDataComponent } from './uw-fetch-dental-data.component';

describe('UwFetchDentalDataComponent', () => {
  let component: UwFetchDentalDataComponent;
  let fixture: ComponentFixture<UwFetchDentalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwFetchDentalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwFetchDentalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
