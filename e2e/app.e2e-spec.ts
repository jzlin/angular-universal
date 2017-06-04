import { AngularUniversalPage } from './app.po';

describe('angular-universal App', () => {
  let page: AngularUniversalPage;

  beforeEach(() => {
    page = new AngularUniversalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
