import { PatientsListPage } from '../page-objects/patients-list.po';

const patientlist_const = {
  'patients_path': '/patients/'
};

describe('kiosk-new App patients-list', () => {
  let page: PatientsListPage;

  beforeAll(() => {
    page = new PatientsListPage();
    page.navigateToUrl(patientlist_const.patients_path);
    page.wait();
  });

  it('should have title', () => {
    expect(page.isTitlePresent()).toBe(true);
  });

  it('should have header title', () => {
    expect(page.isHeaderTitlePresent()).toBe(true);
  });

  it('should have count accordion status patients', () => {
    expect(page.getAccordionElementsCount()).toBe(2);
  });

  it('should have correct count Waiting Patients', () => {
    expect(page.getWaitingPatientsCount()).not.toBe(0);
  });

  it('should have correct count Completed Patients', () => {
    expect(page.getCompletedPatientsCount()).not.toBe(0);
  });

  it('should have correct close "Completed" pop-up dialog', () => {
    expect(page.clickPatientPanel('Completed'));

    page.waitExpandedPanelPatientPresent('Completed').then(() => {
      expect(page.clickFirstCompletedPatient());
    });

    page.waitCustomDialogPresent().then(() => {
      page.clickFirstButtonPopup();
    });

    page.waitCustomDialogClosed().then(() => {
      expect(page.isClosePopupPresent()).toBe(false);
    });
  });

  it('should have correct close "Accept" pop-up dialog', () => {
    expect(page.clickPatientPanel('Waiting'));

    page.waitExpandedPanelPatientPresent('Waiting').then(() => {
      expect(page.clickFirstWaitingPatient());
    });

    page.waitCustomDialogPresent().then(() => {
      page.clickFirstButtonPopup();
    });

    page.waitCustomDialogClosed().then(() => {
      expect(page.isClosePopupPresent()).toBe(false);
    });
  });

  it('should have correct patient selected name in "Accept" pop-up dialog', () => {
    const patientName = page.getFirstWaitingPatientName();

    expect(page.clickFirstWaitingPatient());

    page.waitCustomDialogPresent().then(() => {
      expect(page.getCustomDialogText()).toContain(patientName);
    });
  });

  it('should have text in "Warning" pop-up dialog', () => {
    page.waitCustomDialogPresent().then(() => {
      page.clickAcceptButtonPopupAccepted();
    });

    page.waitAcceptedDialogPresent().then(() => {
      expect(page.isElementTextPresent(page.getCustomDialogTextElement())).toBe(true);
    });
  });

  it('check redirect url to patient page at click "Accept" button in pop-up dialog', () => {
    page.navigateToUrl(patientlist_const.patients_path);
    page.wait();

    page.getFirstWaitingPatientId().then((id) => {
      const patientUrl = patientlist_const.patients_path + id;

      expect(page.clickFirstWaitingPatient());

      page.selectMockScenario('visit-data', id);
      page.selectMockScenario('audit_event', id);
      page.selectMockScenario('assign', 'success');

      expect(page.clickConfirmButtonPopupWarning());

      page.waitForUrl(patientUrl);
      page.wait();

      expect(page.getCurrentUrl()).toEqual(page.getUrl(patientUrl));
    });
  });

  afterEach(() => {
    console.log('\n', '*'.repeat(50), '\n');
  });
  afterAll(() => {
    console.log('\n', '#'.repeat(50), '\n');
  });
});
