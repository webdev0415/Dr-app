import { DomainsEnum } from './domains.enum';

export const environment = {
  production: true,
  forProd: true,
  name: 'china',
  apiDomain: DomainsEnum.CHINA_API,
  serviceDomain: DomainsEnum.CHINA_SERVICE,
  defaultServer: 'china',
  storagePrefix: 'PA',
  useSentryAndLog: false,
  devBar: false,
  cntAPIURL: 'https://cntapi.myhealthfeed.com/api/v1/search',
  cntAPIKey: '5dc86a7f4e54c146a851a8d05d03dbdf2956842a457402a5',
  googleAnalyticsID: 'UA-153015758-2',
};
