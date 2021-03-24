import { by, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';
import { Base } from './_base.po';

export class PatientsListPage extends Base {
  private getAccordionElements(): ElementArrayFinder {
    return element(by.className('mat-accordion')).all(by.className('mat-expansion-panel'));
  }

  private getFirstWaitingPatientElement(): ElementFinder {
    return this.getWaitingPatients().get(0);
  }

  private getFirstCompletedPatientElement(): ElementFinder {
    return this.getCompletedPatients().get(0);
  }

  private getPanelPatientElement(panelName: string): ElementFinder {
    let panelElem;
    if (panelName.toLowerCase() === 'completed') {
      panelElem = this.getAccordionElements().get(1);
    } else {
      panelElem = this.getAccordionElements().get(0);
    }
    return panelElem;
  }

  getAccordionElementsCount(): promise.Promise<number> {
    return this.getAccordionElements().count();
  }

  getWaitingPatients(): ElementArrayFinder {
    return this.getAccordionElements().get(0).all(by.className('mat-row'));
  }

  getCompletedPatients(): ElementArrayFinder {
    return this.getAccordionElements().get(1).all(by.className('mat-row'));
  }

  getWaitingPatientsCount(): promise.Promise<number> {
    return this.getWaitingPatients().count();
  }

  getCompletedPatientsCount(): promise.Promise<number> {
    return this.getCompletedPatients().count();
  }

  getFirstWaitingPatientName(): promise.Promise<string> {
    return this.getFirstWaitingPatientElement().element(by.className('mat-column-patient_name')).getText();
  }

  getFirstWaitingPatientId(): promise.Promise<string> {
    return this.getFirstWaitingPatientElement().element(by.className('mat-column-patient_id')).getText();
  }

  getCustomDialogTextElement(): ElementFinder {
    return this.getCustomDialogElement().element(by.tagName('p'));
  }

  clickFirstWaitingPatient(): promise.Promise<void> {
    return this.getFirstWaitingPatientElement().click();
  }

  clickFirstCompletedPatient(): promise.Promise<void> {
    return this.getFirstCompletedPatientElement().click();
  }

  clickPatientPanel(panelName: string): promise.Promise<void> {
    return this.getPanelPatientElement(panelName).click();
  }

  clickFirstButtonPopup(): promise.Promise<void> {
    const popup = this.getCustomDialogElement();
    return this.waitElementToBeClickable(popup).then(() => {
      return popup.element(by.css('button:first-child')).click();
    });
  }

  clickAcceptButtonPopupAccepted(): promise.Promise<void> {
    const popup = this.getCustomDialogElement();
    return this.waitElementToBeClickable(popup).then(() => {
      return popup.element(by.css('button:nth-child(2)')).click();
    });
  }

  clickConfirmButtonPopupWarning(): promise.Promise<void> {
    const popup = this.getCustomDialogElement();
    return popup.getId().then((id) => {
      this.clickAcceptButtonPopupAccepted();
      this.waitChangeElementId(popup, id).then(() => {
        return this.waitElementToBeClickable(popup).then(() => {
          return popup.element(by.tagName('button')).click();
        });
      });
    });
  }

  waitAcceptedDialogPresent(): promise.Promise<void> {
    const popup = this.getCustomDialogElement();
    return popup.getId().then((id) => {
      return this.waitChangeElementId(popup, id);
    });
  }

  waitExpandedPanelPatientPresent(panelName: string): promise.Promise<void> {
    const panelElem = this.getPanelPatientElement(panelName);
    return this.waitAppendElementClass(panelElem, 'mat-expanded');
  }

  isClosePopupPresent(): promise.Promise<boolean> {
    const popup = this.getCustomDialogElement();

    return popup.element(by.tagName('button')).isPresent();
  }
}
