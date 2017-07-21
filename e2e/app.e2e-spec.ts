import { NgCliVscodeErrorSamplePage } from './app.po';

describe('ng-cli-vscode-error-sample App', () => {
  let page: NgCliVscodeErrorSamplePage;

  beforeEach(() => {
    page = new NgCliVscodeErrorSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
