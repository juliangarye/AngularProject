import { TestBed, inject } from '@angular/core/testing';

import { DatailCustomerService } from './datail-customer.service';

describe('DatailCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatailCustomerService]
    });
  });

  it('should be created', inject([DatailCustomerService], (service: DatailCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
