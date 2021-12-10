import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePlans1Component } from './compare-plans1.component';

describe('ComparePlans1Component', () => {
  let component: ComparePlans1Component;
  let fixture: ComponentFixture<ComparePlans1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparePlans1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparePlans1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
