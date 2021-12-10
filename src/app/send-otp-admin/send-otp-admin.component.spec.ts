import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOtpAdminComponent } from './send-otp-admin.component';

describe('SendOtpAdminComponent', () => {
  let component: SendOtpAdminComponent;
  let fixture: ComponentFixture<SendOtpAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendOtpAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOtpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
