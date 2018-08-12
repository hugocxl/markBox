import { TestBed, async, inject } from '@angular/core/testing';

import { InitAuthGuard } from './init-auth.guard';

describe('InitAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitAuthGuard]
    });
  });

  it('should ...', inject([InitAuthGuard], (guard: InitAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
