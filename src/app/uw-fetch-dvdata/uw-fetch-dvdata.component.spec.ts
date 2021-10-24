import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwFetchDVDataComponent } from './uw-fetch-dvdata.component';

describe('UwFetchDVDataComponent', () => {
  let component: UwFetchDVDataComponent;
  let fixture: ComponentFixture<UwFetchDVDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwFetchDVDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwFetchDVDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
