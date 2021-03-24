import { login_const } from '../consts/login.const';
import { LoginPage } from '../page-objects/login.po';

describe('kiosk-new App login', () => {
  let page: LoginPage;

  beforeAll(() => {
    page = new LoginPage();
    page.navigateToUrl();
    page.wait();
  });

  it('check title root page', () => {
    expect(page.isTitlePresent()).toBe(true);
  });

  it('check redirect url to login page ' + login_const.login_path, () => {
    expect(page.getCurrentUrl()).toEqual(page.getUrl(login_const.login_path));
  });

  it('check incorrect login or password', () => {
    page.selectMockScenario('login', 'invalidLogin');
    page.authorizeIncorrect();
    page.waitCustomDialogPresent().then(() => {
      expect(page.getCustomDialogText()).toEqual(login_const.auth.invalid_msg);
    });
    page.clickCloseButtonPopupAuthorizeIncorrect();
    page.waitCustomDialogClosed().then(() => {
      expect(page.isClosePopupAuthorizeIncorrectPresent()).toBe(false);
    });
  });

  it('check correct login and password', () => {
    page.selectMockScenario('login', 'success');
    page.authorizeCorrect(login_const.auth.login, login_const.auth.password);
    page.waitForUrl(login_const.patients_path);
    page.wait();
    expect(page.getCurrentUrl()).toEqual(page.getUrl(login_const.patients_path));
  });

  afterEach(() => {
    console.log('\n', '*'.repeat(50), '\n');
  });
  afterAll(() => {
    console.log('\n', '#'.repeat(50), '\n');
  });
});
