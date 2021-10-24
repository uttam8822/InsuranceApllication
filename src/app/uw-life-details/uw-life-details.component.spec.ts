import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwLifeDetailsComponent } from './uw-life-details.component';

describe('UwLifeDetailsComponent', () => {
  let component: UwLifeDetailsComponent;
  let fixture: ComponentFixture<UwLifeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwLifeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwLifeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
