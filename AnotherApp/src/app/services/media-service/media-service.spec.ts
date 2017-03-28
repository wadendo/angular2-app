import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {MediaService} from './media-service';


describe('MediaService Service', () => {

  beforeEachProviders(() => [MediaService]);


  it('should ...', inject([MediaService], (service:MediaService) => {

  }));

});
