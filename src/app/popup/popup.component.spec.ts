import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POPUPComponent } from './popup.component';

describe('POPUPComponent', () => {
  let component: POPUPComponent;
  let fixture: ComponentFixture<POPUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POPUPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POPUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
