import { TestBed } from '@angular/core/testing';

import { SoustypevehiculeService } from './soustypevehicule.service';

describe('SoustypevehiculeService', () => {
  let service: SoustypevehiculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoustypevehiculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
