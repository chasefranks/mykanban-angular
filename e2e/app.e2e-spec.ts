import { MykanbanAngularPage } from './app.po';

describe('mykanban-angular App', () => {
  let page: MykanbanAngularPage;

  beforeEach(() => {
    page = new MykanbanAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
