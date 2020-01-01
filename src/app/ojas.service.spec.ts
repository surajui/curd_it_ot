import { TestBed } from '@angular/core/testing';

import { OjasService } from './ojas.service';

describe('OjasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OjasService = TestBed.get(OjasService);
    expect(service).toBeTruthy();
  });
});
