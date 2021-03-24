import { DomainsEnum } from './domains.enum';

export const environment = {
  production: false,
  forProd: false,
  name: 'local',
  config: 'dev',
  apiDomain: '/_api',
  serviceDomain: '/_dev-service',
  utilityDomain: DomainsEnum.DEV_UTILITY,
  devBar: true,
  defaultServer: 'testingServer2',
  storagePrefix: 'PA_DEV',
  sentry: '',
  useSentryAndLog: false,
  fastMedDomain: DomainsEnum.FASTMED_DEV_DOMAIN,
  fastMedAPI: DomainsEnum.PILOT_API,
  cntAPIURL: 'https://cntapidemo.myhealthfeed.com/api/v1/',
  cntAPIKey: '',
  googleAnalyticsID: 'UA-153015758-2',
  picDomain: '',
  picAPI: ''
};
