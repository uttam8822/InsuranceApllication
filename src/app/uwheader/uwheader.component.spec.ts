import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UWheaderComponent } from './uwheader.component';

describe('UWheaderComponent', () => {
  let component: UWheaderComponent;
  let fixture: ComponentFixture<UWheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UWheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UWheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
