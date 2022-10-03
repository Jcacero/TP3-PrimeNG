import { TestBed } from '@angular/core/testing';

import { PruebaGuardGuard } from './prueba-guard.guard';

describe('PruebaGuardGuard', () => {
  let guard: PruebaGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PruebaGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
