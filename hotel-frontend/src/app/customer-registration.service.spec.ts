import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRegistrationService } from './customer-registration.service';

describe('CustomerRegistrationService', () => {
  let service: CustomerRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
      imports: 
      [
        HttpClientModule
      ]
    }
    );
    service = TestBed.inject(CustomerRegistrationService);
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  }
  );
}
);
