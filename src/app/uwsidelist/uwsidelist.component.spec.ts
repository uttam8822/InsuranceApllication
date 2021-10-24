import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UWSidelistComponent } from './uwsidelist.component';

describe('UWSidelistComponent', () => {
  let component: UWSidelistComponent;
  let fixture: ComponentFixture<UWSidelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UWSidelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UWSidelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
