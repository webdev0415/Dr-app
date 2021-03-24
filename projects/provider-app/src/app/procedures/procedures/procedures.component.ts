import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BottomButtonsControl } from '../../components/app/workspace/patientspace/bottom-space/interfaces';


import { NotificationsService, PatientdataService, StateService } from '../../services';
import { UserService } from '../../user/user.service';
import { BaseProceduresComponent } from '../base-procedures/base-procedures.component';
import { NOTIFICATIONS_PROVIDER } from '../tokens/notifications-provider.token';
import { PATIENT_DATA_SERVICE } from '../tokens/patient-data.token';
import { ProceduresService } from '../procedures.service';
import { PROCEDURES_UPDATE_SERVICE } from '../tokens/procedures-update.token';
import { USER_ROLE } from '../tokens/user-role.token';
import { Event as REvent, NavigationStart, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'pa-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss'],
  providers: [
    { provide: USER_ROLE, useFactory: (userService: UserService) => userService.getUserRole, deps: [UserService] },
    { provide: PROCEDURES_UPDATE_SERVICE, useExisting: ProceduresService },
    { provide: PATIENT_DATA_SERVICE, useExisting: PatientdataService },
    { provide: NOTIFICATIONS_PROVIDER, useExisting: NotificationsService }
  ]
})
export class ProceduresComponent implements BottomButtonsControl, OnDestroy {
  private activeComponent: BaseProceduresComponent<any, any, any, any>;
  private destroy$: Subject<boolean> = new Subject();
  constructor(private stateService: StateService, private titleService: Title, private router: Router) {
    this.router.events
      .pipe(
        filter((event: REvent) => event instanceof NavigationStart),
        filter(() => !this.activeComponent.getDisabledBottomButtons()['save'] ),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationStart) => {
        this.onClickBottomButton('save');
      });
   }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onComponentActivate(component: BaseProceduresComponent<any, any, any, any>): void {
    this.activeComponent = component;
    this.updateTitle(component);
  }

  public updateTitle(component: BaseProceduresComponent<any, any, any, any>): void {
    if (component) {
      this.titleService.setTitle(component.title);
      this.stateService.app.header.setData(component.title);
    }
  }

  getDisabledBottomButtons() {
    if (this.activeComponent) return this.activeComponent.getDisabledBottomButtons();
  }

  getShownBottomButtons() {
    return {
      save: true
    };
  }

  onClickBottomButton(nameButton: string): void {
    if (this.activeComponent) this.activeComponent.onClickBottomButton(nameButton);
  }
}
