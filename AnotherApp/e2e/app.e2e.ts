/// <reference path="../typings/main.d.ts" />

import { AnotherAppPage } from './app.po';

describe('another-app App', function() {
  let page: AnotherAppPage;

  beforeEach(() => {
    page = new AnotherAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('another-app Works!');
  });
});
