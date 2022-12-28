import { TestBed } from '@angular/core/testing';

import { TrafficLightsService } from './traffic-lights.service';

describe('TrafficLightsService', () => {
  let service: TrafficLightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficLightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
