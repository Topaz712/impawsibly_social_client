import { TestBed } from '@angular/core/testing';

import { PlaydateService } from './playdate.service';

describe('PlaydateService', () => {
  let service: PlaydateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaydateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
