import { Application2Page } from './app.po';

describe('application2 App', function() {
  let page: Application2Page;

  beforeEach(() => {
    page = new Application2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
