import {
  browser, by, element, ElementFinder, promise, ExpectedConditions,
  ProtractorExpectedConditions
} from 'protractor';
import * as url from 'url';
import { base_const } from '../consts/_base.const';

export class Base {
  EC: ProtractorExpectedConditions = ExpectedConditions;
  apiMock = browser.ngApimock;
  timeout = base_const.timeout;

  navigateToUrl(path?: string): promise.Promise<string> {
    if (path) {
      return browser.get(path);
    }
    return browser.get(base_const.baseHref);
  }

  selectMockScenario(data: string | Object, scenario: string): void {
    this.apiMock.selectScenario(data, scenario);
  }

  wait(): void {
    browser.waitForAngular();
  }

  sleep(ms: number): void {
    browser.sleep(ms);
  }

  waitForUrl(path: string, timeout: number = this.timeout): void {
    browser.wait(this.EC.urlContains(this.getUrl(path)), timeout);
  }

  waitElementToBeClickable(elementFinder: ElementFinder, timeout: number = this.timeout): promise.Promise<any> {
    return browser.wait(this.EC.elementToBeClickable(elementFinder), timeout);
  }

  waitCustomDialogPresent(timeout: number = this.timeout): promise.Promise<any> {
    const popup = this.getCustomDialogElement();
    return browser.wait(this.EC.presenceOf(popup), timeout);
  }

  waitCustomDialogClosed(timeout: number = this.timeout): promise.Promise<any> {
    const popup = this.getCustomDialogElement();
    return browser.wait(this.EC.not(this.EC.presenceOf(popup)), timeout);
  }

  waitChangeElementId(elementFinder: ElementFinder, oldId: string,
                      timeout: number = this.timeout): promise.Promise<any> {
    return browser.wait(() => {
      return elementFinder.getId().then((id) => oldId !== id);
    }, timeout);
  }

  waitAppendElementClass(elementFinder: ElementFinder, className: string,
                      timeout: number = this.timeout): promise.Promise<any> {
    return browser.wait(() => {
      return elementFinder.getAttribute('class').then((classes) => classes.includes(className));
    }, timeout);
  }

  isTitlePresent(): promise.Promise<boolean> {
    return new promise.Promise((resolve) => {
        resolve(this.getTitle().then((title) => !!title));
      });
  }

  isHeaderTitlePresent(): promise.Promise<boolean> {
    const span = element(by.id('header-container')).element(by.tagName('span'));
    return this.isElementTextPresent(span);
  }

  isElementTextPresent(inElement: ElementFinder): promise.Promise<boolean> {
    return new promise.Promise((resolve) => {
      resolve(inElement.getText().then((text) => !!text));
    });
  }

  getTitle(): promise.Promise<string> {
    return browser.getTitle();
  }

  getUrl(path: string): string {
    return url.resolve(browser.baseUrl, base_const.baseHref + path);
  }

  getCurrentUrl(): promise.Promise<string> {
    return browser.getCurrentUrl();
  }

  getCustomDialogElement(): ElementFinder {
    return element(by.tagName(this.getSelectorName('ppcustomdialog')));
  }

  getElementTextByCss(cssSelector: string): promise.Promise<string> {
    return element(by.css(cssSelector)).getText();
  }

  getSelectorName(selector: string): string {
    return base_const.selectorPrefix + selector;
  }

  getCustomDialogText(): promise.Promise<string> {
    return this.getCustomDialogElement().element(by.tagName('p')).getText();
  }
}
