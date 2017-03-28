/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MyRegisterFormComponent } from './my-register-form.component';

describe('Component: MyRegisterForm', () => {
  it('should create an instance', () => {
    let component = new MyRegisterFormComponent();
    expect(component).toBeTruthy();
  });
});
