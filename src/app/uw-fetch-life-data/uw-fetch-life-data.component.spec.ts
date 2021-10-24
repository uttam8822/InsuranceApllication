import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwFetchLifeDataComponent } from './uw-fetch-life-data.component';

describe('UwFetchLifeDataComponent', () => {
  let component: UwFetchLifeDataComponent;
  let fixture: ComponentFixture<UwFetchLifeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwFetchLifeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwFetchLifeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
