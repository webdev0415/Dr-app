# ProviderApp - Medical Staff Operating Application
This project use
- Angular 9
- Sass
- [Material Design for Bootstrap (Angular version)](https://mdbootstrap.com/docs/angular/)
- [Opentok.js](https://tokbox.com/developer/sdks/js/)
- [Sugar.js](https://sugarjs.com/)
- [Ramda.js](https://ramdajs.com/)

## Project requirements
- Node.js
[current, active LTS, or maintenance LTS version](https://nodejs.org/en/about/releases/) of Node.js
- npm package manager

## Installation
- install [Node.js](https://nodejs.org/en/) for your platform
- `git clone https://gitlab.com/AdviNow/Practioner-Web-Version.git` - clone the project repository
- `cd Practioner-Web-Version/` navigate to project root directory
- `npm install` install project dependencies 

## API Documentation
- [Orchestration Engine and General Backend](https://testing2.advinow.net/oe2-swagger/#/DrApp)
- [MICA](https://devservices.advinow.net/2070Services/swagger-ui.html#/)
- [Endpoint statuses](https://utilities.advinow.net/status)

## Scripts

**Run**
- `npm run serve:[local|dev|pilot|prod]` - run a dev server with environment [local|dev|pilot|prod] specific configuration in watch mode
- `npm run serve:proxy` - run a dev server with dev environment configuration. Could be used to avoid CORS issues when testing on remote devices

**Build**
- `npm run build` - using in CI pipeline
- `npm run build:[dev|pilot|prod]` - will compile app in [development|production|pilot] environment with AOT
- `npm run build:redesign` - ~~will compile app in development mode. Could be used for long term tasks deploy on secondary dev instance~~ (deprecated)
- `npm run build:pharmacist && npm run build:documents-generator` - will build packages required for [AngularPharmacyDocs](https://gitlab.com/AdviNow/angularpharmacydocs)

**Test**

[using karma spec runner](https://gitlab.com/AdviNow/Practioner-Web-Version/-/blob/development/projects/provider-app/karma.conf.js)
- `npm run test` - using in CI pipeline
- `npm run test:local` - run unit tests in watch mode
## Project structure

### /projects
```$xslt
    ~/projects
        /documents-generator - html2pdf.js based PDF documents generator
        /patient-profile     - patient profile services
        /pharmacist          - pharmacist specific legal documents components
        /provider-documents  - practitioner and medical assistants specific legal documents components
        /shared-models       - used to proxify imports of models, placed in pharmacist module
        /provider-app        - core application
```

#### /provider-app

**FEATURE MODULES**
```$xslt
    ~/projects
        /provider-app 
            /discharge       - patient discharge/authorization to work data representation module
            /documents       - module provides patient data into representation components (pharmacist/provider-documents)
            /labs            - labs module
            /patient-core    - patient visit data services
            /patient-list    - patients list module
            /physical-exam   - physical exams module
            /procedures      - medical procedures/injections module
            /telemedicine    - remote patient visit module
            /treatments      - patient treatments instruction module
            /user            - auth module
            /utils           - utils functions/classes
```

**PROJECT'S OLD-FASHIONED TRAITS**

```
    /projects
        /provider-app
            /common          - data types related directory (contain types of data related to many modules)
            /components      - mostly header component and diagnosis module
            /directives      - directives module
            /guards          - guards module
            /interceptors    - interceptors module
            /services        - services directory
            /static          - files contains constants
            /tests           - ng-bullet utils
```

### Utils folders
```$xslt
    /deploy           - a pack of scripts, used to deploy the project (outdated)
    /docker           - docker containerization configs
    /practitioner-web - k8 configs
```

# LONG TERM TODO LIST:
**Testing:**

[ ] up unit tests code coverage to ~100% 
current coverage (09/21/2020):

Percentage|Type|Units
-----|------|------ 
42.66%|Statements|5458/12794 
25.09%|Branches|1386/5524 
35.23%|Functions|1529/4340 
43.72%|Lines |4778/10929


- [ ] remove [ng-bullet based testing modules configuration](https://gitlab.com/AdviNow/Practioner-Web-Version/-/blob/development/projects/provider-app/src/app/tests/test-context.ts), since it doesn't have any value after [Angular 9 update](https://blog.angular.io/version-9-of-angular-now-available-project-ivy-has-arrived-23c97b63cfa3)
- [ ] remove unnecessary complex mockup classes
- [ ] replace of imports dependencies implementation (services mostly) with spies

**Refactoring:**

[ ] remove old-fashioned traits by splitting them into feature modules

[ ] finish [angular monorepo](https://angular.io/guide/file-structure#setting-up-for-a-multi-project-workspace) implementation

[ ] make the following projects/feature modules a ready to share libraries: 
- [**pharmacist**](https://gitlab.com/AdviNow/Practioner-Web-Version/-/tree/development/projects/pharmacist)
- [**documents-generator**](https://gitlab.com/AdviNow/Practioner-Web-Version/-/tree/development/projects/documents-generator)
- [**telemedicine**](https://gitlab.com/AdviNow/Practioner-Web-Version/-/tree/development/projects/provider-app/src/app/telemedicine)

**Store solution:**

[ ] replace [NGXS](https://www.ngxs.io/) and [RxJs-based states](https://gitlab.com/AdviNow/Practioner-Web-Version/-/blob/development/projects/provider-app/src/app/treatments/treatments.service.ts#L49) with [NgRx](https://ngrx.io/guide/store)

# New line to test the JIRA-Gitlab Integration
