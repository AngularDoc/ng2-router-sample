import { Ng2RouterSamplePage } from './app.po';

describe('ng2-router-sample App', function() {
  let page: Ng2RouterSamplePage;

  beforeEach(() => {
    page = new Ng2RouterSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
