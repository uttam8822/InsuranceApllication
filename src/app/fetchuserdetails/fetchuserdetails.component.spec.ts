import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchuserdetailsComponent } from './fetchuserdetails.component';

describe('FetchuserdetailsComponent', () => {
  let component: FetchuserdetailsComponent;
  let fixture: ComponentFixture<FetchuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchuserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
