import { TestBed, inject } from '@angular/core/testing';

import { MdNotesService } from './md-notes.service';

describe('MdNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdNotesService]
    });
  });

  it('should be created', inject([MdNotesService], (service: MdNotesService) => {
    expect(service).toBeTruthy();
  }));
});
