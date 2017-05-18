import { Angular2PractPage } from './app.po';

describe('angular2-pract App', () => {
  let page: Angular2PractPage;

  beforeEach(() => {
    page = new Angular2PractPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
