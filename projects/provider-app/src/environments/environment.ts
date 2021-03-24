// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.
import { DomainsEnum } from "./domains.enum";

export const environment = {
  production: true,
  forProd: false,
  name: "",
  apiDomain: DomainsEnum.DEV_API,
  serviceDomain: DomainsEnum.DEV_SERVICE,
  utilityDomain: DomainsEnum.DEV_UTILITY,
  defaultServer: "testingServer",
  storagePrefix: "",
  sentry: "",
  useSentryAndLog: true,
  devBar: false,
  fastMedDomain: "fastmed.advinow.net",
  fastMedAPI: "https://fastmedoe.advinow.net",
  cntAPIURL: "",
  cntAPIKey: "",
  googleAnalyticsID: "UA-153015758-2",
  picDomain: "",
  picAPI: "",
  fullstoryOrgId: "HH916",
};
