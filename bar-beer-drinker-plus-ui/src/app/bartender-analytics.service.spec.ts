import { TestBed } from '@angular/core/testing';

import { BartenderAnalyticsService } from './bartender-analytics.service';

describe('BartenderAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BartenderAnalyticsService = TestBed.get(BartenderAnalyticsService);
    expect(service).toBeTruthy();
  });
});
