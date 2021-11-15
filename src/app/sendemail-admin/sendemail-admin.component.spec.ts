import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendemailAdminComponent } from './sendemail-admin.component';

describe('SendemailAdminComponent', () => {
  let component: SendemailAdminComponent;
  let fixture: ComponentFixture<SendemailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendemailAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendemailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
