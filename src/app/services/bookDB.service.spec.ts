import { TestBed, inject } from '@angular/core/testing';

import { BookDBService } from './bookDB.service';

describe('BookDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookDBService]
    });
  });

  it('should be created', inject([BookDBService], (service: BookDBService) => {
    expect(service).toBeTruthy();
  }));
});
