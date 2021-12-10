import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOtpUwComponent } from './send-otp-uw.component';

describe('SendOtpUwComponent', () => {
  let component: SendOtpUwComponent;
  let fixture: ComponentFixture<SendOtpUwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendOtpUwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOtpUwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
