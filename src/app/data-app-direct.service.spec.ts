import { TestBed } from '@angular/core/testing';

import { DataAppDirectService } from './data-app-direct.service';

describe('DataAppDirectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAppDirectService = TestBed.get(DataAppDirectService);
    expect(service).toBeTruthy();
  });
});
