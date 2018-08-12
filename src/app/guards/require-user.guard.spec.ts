import { TestBed, async, inject } from '@angular/core/testing';

import { RequireUserGuard } from './require-user.guard';

describe('RequireUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireUserGuard]
    });
  });

  it('should ...', inject([RequireUserGuard], (guard: RequireUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
