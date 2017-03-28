/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MyLoginFormComponent } from './my-login-form.component';

describe('Component: MyLoginForm', () => {
 it('should create an instance', () => {
    let component = new MyLoginFormComponent();
    expect(component).toBeTruthy();
  });
});
