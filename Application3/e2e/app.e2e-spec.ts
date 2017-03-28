import { Application3Page } from './app.po';

describe('application3 App', function() {
  let page: Application3Page;

  beforeEach(() => {
    page = new Application3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
