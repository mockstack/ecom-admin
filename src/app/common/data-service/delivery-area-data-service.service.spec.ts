import { TestBed } from '@angular/core/testing';

import { DeliveryAreaDataServiceService } from './delivery-area-data-service.service';

describe('DeliveryAreaDataServiceService', () => {
  let service: DeliveryAreaDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryAreaDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
