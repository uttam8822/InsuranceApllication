import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmailUWComponent } from './sendmail-uw.component';

describe('SendmailUWComponent', () => {
  let component: SendmailUWComponent;
  let fixture: ComponentFixture<SendmailUWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendmailUWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmailUWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
