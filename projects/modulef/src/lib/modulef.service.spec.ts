import { TestBed, inject } from '@angular/core/testing';

import { ModulefService } from './modulef.service';

describe('ModulefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulefService]
    });
  });

  it('should be created', inject([ModulefService], (service: ModulefService) => {
    expect(service).toBeTruthy();
  }));
});
