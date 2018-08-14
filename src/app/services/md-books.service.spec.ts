import { TestBed, inject } from '@angular/core/testing';

import { MdBooksService } from './md-books.service';

describe('MdBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdBooksService]
    });
  });

  it('should be created', inject([MdBooksService], (service: MdBooksService) => {
    expect(service).toBeTruthy();
  }));
});
