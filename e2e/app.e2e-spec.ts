import { PTNg4Page } from './app.po';

describe('ptng4 App', () => {
  let page: PTNg4Page;

  beforeEach(() => {
    page = new PTNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
