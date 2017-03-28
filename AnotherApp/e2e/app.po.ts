export class AnotherAppPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('AnotherApp-app p')).getText(); }
}
