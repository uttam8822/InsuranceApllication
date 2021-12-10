import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UWuserDetailsComponent } from './uwuser-details.component';

describe('UWuserDetailsComponent', () => {
  let component: UWuserDetailsComponent;
  let fixture: ComponentFixture<UWuserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UWuserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UWuserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
