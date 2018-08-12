import { TestBed, inject } from '@angular/core/testing';

import { HighlightCodeService } from './highlight-code.service';

describe('HighlightCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighlightCodeService]
    });
  });

  it('should be created', inject([HighlightCodeService], (service: HighlightCodeService) => {
    expect(service).toBeTruthy();
  }));
});
