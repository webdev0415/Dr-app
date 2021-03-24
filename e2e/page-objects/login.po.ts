import { by, element, promise } from 'protractor';
import { Base } from './_base.po';

export class LoginPage extends Base {
  private authorize(user: string, passwd: string): promise.Promise<void> {
    element(by.name('login')).sendKeys(user);
    element(by.name('password')).sendKeys(passwd);

    return element(by.tagName('button')).click();
  }

  authorizeCorrect(user: string, passwd: string): void {
    this.authorize(user, passwd);
  }

  authorizeIncorrect(): void {
    this.authorize('fgf', 'gfh');
  }

  clickCloseButtonPopupAuthorizeIncorrect(): promise.Promise<void> {
    const popup = this.getCustomDialogElement();
    return this.waitElementToBeClickable(popup).then(() => {
      return popup.element(by.tagName('button')).click();
    });
  }

  isClosePopupAuthorizeIncorrectPresent(): promise.Promise<boolean> {
    const popup = this.getCustomDialogElement();

    return popup.element(by.tagName('button')).isPresent();
  }
}
