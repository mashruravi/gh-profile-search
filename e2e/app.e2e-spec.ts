import { GhProfileSearchPage } from './app.po';

describe('gh-profile-search App', () => {
  let page: GhProfileSearchPage;

  beforeEach(() => {
    page = new GhProfileSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
