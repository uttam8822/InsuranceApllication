import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOtpUserComponent } from './send-otp-user.component';

describe('SendOtpUserComponent', () => {
  let component: SendOtpUserComponent;
  let fixture: ComponentFixture<SendOtpUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendOtpUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOtpUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
