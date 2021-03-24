import { DomainsEnum } from './domains.enum';

export const environment = {
  production: false,
  forProd: false,
  name: 'local',
  config: 'dev',
  apiDomain: DomainsEnum.DEV_API,
  serviceDomain: DomainsEnum.DEV_SERVICE,
  utilityDomain: DomainsEnum.DEV_UTILITY,
  devBar: true,
  defaultServer: 'testingServer2',
  storagePrefix: 'PA_DEV',
  sentry: 'https://95900c1cfa9c4199be87a3d8ab14fdb2@sentry.io/1227349',
  useSentryAndLog: false,
  fastMedDomain: DomainsEnum.FASTMED_DEV_DOMAIN,
  fastMedAPI: DomainsEnum.PILOT_API,
  cntAPIURL: 'https://cntapidemo.myhealthfeed.com/api/v1/',
  cntAPIKey: '5dc86a7f4e54c146a851a8d05d03dbdf2956842a457402a5',
  googleAnalyticsID: null,
  picDomain: '',
  picAPI: '',
  fullstoryOrgId: 'HH916'
};
