/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ListMediasComponent } from './list-medias.component';

describe('Component: ListMedias', () => {
  it('should create an instance', () => {
    let component = new ListMediasComponent();
    expect(component).toBeTruthy();
  });
});
