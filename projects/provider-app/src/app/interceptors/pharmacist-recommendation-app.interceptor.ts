import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


import { UserService } from 'user/user.service';
import { UserRolesEnum } from '../common/enums/user-roles.enum';
import { PatientDataFacadeService } from '../patient-core/patient-data-facade.service';


@Injectable()

export class PharmacistRecommendationAppInterceptor implements HttpInterceptor {

  constructor(
    private corePatientDataService: PatientDataFacadeService,
    private userService: UserService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('rerun_triage') && this.userService.getUserRole === UserRolesEnum.PHARMACIST && req.method !== 'OPTIONS') {
      return next.handle(req).pipe(finalize(() => this.corePatientDataService.updatePharmacistRecommendations()));
    }
    return next.handle(req);
  }
}
