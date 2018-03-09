import { DynamicComponentsPage } from './app.po';

describe('dynamic-components App', () => {
  let page: DynamicComponentsPage;

  beforeEach(() => {
    page = new DynamicComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
