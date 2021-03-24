import { DomainsEnum } from './domains.enum';

export const environment = {
  production: true,
  forProd: true,
  config: 'prod',
  name: 'production',
  apiDomain: DomainsEnum.PROD_API,
  serviceDomain: DomainsEnum.PROD_SERVICE,
  utilityDomain: DomainsEnum.PILOT_PROD_UTILITY,
  defaultServer: 'productionServer',
  storagePrefix: 'PA',
  sentry: 'https://95900c1cfa9c4199be87a3d8ab14fdb2@sentry.io/1227349',
  useSentryAndLog: true,
  devBar: false,
  fastMedDomain: DomainsEnum.FASTMED_DOMAIN,
  fastMedAPI: 'https://fastmedoe.advinow.com',
  cntAPIURL: 'https://cntapi.myhealthfeed.com/api/v1/',
  cntAPIKey: '5dc86a7f4e54c146a851a8d05d03dbdf2956842a457402a5',
  googleAnalyticsID: 'UA-153015758-2',
  picDomain: DomainsEnum.PIC_DOMAIN,
  picAPI: DomainsEnum.PIC_PROD_API,
  fullstoryOrgId: 'HH916'
};
