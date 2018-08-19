import { TestBed, inject } from '@angular/core/testing';

import { FilesaverService } from './filesaver.service';

describe('FilesaverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesaverService]
    });
  });

  it('should be created', inject([FilesaverService], (service: FilesaverService) => {
    expect(service).toBeTruthy();
  }));
});
