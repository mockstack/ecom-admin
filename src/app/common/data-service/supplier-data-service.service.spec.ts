import { TestBed } from '@angular/core/testing';

import { SupplierDataServiceService } from './supplier-data-service.service';

describe('SupplierDataServiceService', () => {
  let service: SupplierDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
