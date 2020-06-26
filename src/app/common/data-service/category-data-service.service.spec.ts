import { TestBed } from '@angular/core/testing';

import { CategoryDataServiceService } from './category-data-service.service';

describe('CategoryDataServiceService', () => {
  let service: CategoryDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
