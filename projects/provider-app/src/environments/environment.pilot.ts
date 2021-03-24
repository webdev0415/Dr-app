import { DomainsEnum } from './domains.enum';

export const environment = {
  production: true,
  forProd: true,
  name: 'pilot',
  apiDomain: DomainsEnum.PILOT_API,
  serviceDomain: DomainsEnum.PILOT_SERVICE,
  utilityDomain: DomainsEnum.PILOT_PROD_UTILITY,
  defaultServer: 'pilotTools',
  storagePrefix: 'PA',
  useSentryAndLog: true,
  sentry: 'https://95900c1cfa9c4199be87a3d8ab14fdb2@sentry.io/1227349',
  devBar: false,
  fastMedDomain: DomainsEnum.FASTMED_PILOT_DOMAIN,
  fastMedAPI: DomainsEnum.DEV_API,
  cntAPIURL: 'https://cntapi.myhealthfeed.com/api/v1/',
  cntAPIKey: '5dc86a7f4e54c146a851a8d05d03dbdf2956842a457402a5',
  googleAnalyticsID: 'UA-153015758-2',
  picDomain: '',
  picAPI: '',
  fullstoryOrgId: 'HH916'
};
