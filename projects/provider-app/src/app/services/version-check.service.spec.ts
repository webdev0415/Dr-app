import { inject } from '@angular/core/testing';

import { VersionCheckService } from './version-check.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { generateSpecs } from '@pa-tests/test-context';

describe('VersionCheckService', generateSpecs({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
    providers: [VersionCheckService]
  },
  () => {
    let service: VersionCheckService;

    beforeEach(inject([VersionCheckService], (versionCheckService: VersionCheckService) => {
        service = versionCheckService;
      }));

    it('should create', () => {
      expect(service).toBeTruthy();
    });
  }
));
