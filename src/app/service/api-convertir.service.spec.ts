import { TestBed } from '@angular/core/testing';

import { ApiConvertirService } from './api-convertir.service';

describe('ApiConvertirService', () => {
  let service: ApiConvertirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConvertirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
