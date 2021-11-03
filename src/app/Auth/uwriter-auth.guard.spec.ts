import { TestBed } from '@angular/core/testing';

import { UwriterAuthGuard } from './uwriter-auth.guard';

describe('UwriterAuthGuard', () => {
  let guard: UwriterAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UwriterAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
