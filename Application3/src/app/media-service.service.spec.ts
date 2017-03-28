/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MediaServiceService } from './media-service.service';

describe('MediaService Service', () => {
  beforeEachProviders(() => [MediaServiceService]);

  it('should ...',
      inject([MediaServiceService], (service: MediaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
