import { Application4Page } from './app.po';

describe('application4 App', function() {
  let page: Application4Page;

  beforeEach(() => {
    page = new Application4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
