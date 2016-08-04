/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MyAudioComponent } from './my-audio.component';

describe('Component: MyAudio', () => {
  it('should create an instance', () => {
    let component = new MyAudioComponent();
    expect(component).toBeTruthy();
  });
});
