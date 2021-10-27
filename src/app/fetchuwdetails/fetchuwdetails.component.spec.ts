import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchuwdetailsComponent } from './fetchuwdetails.component';

describe('FetchuwdetailsComponent', () => {
  let component: FetchuwdetailsComponent;
  let fixture: ComponentFixture<FetchuwdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchuwdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchuwdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
