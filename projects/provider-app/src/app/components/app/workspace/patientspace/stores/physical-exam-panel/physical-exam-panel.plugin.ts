import { Injectable } from '@angular/core';
import { getActionTypeFromInstance, NgxsPlugin } from '@ngxs/store';

import { NotificationsService } from '../../../../../notifications/notifications.service';

import { EditFinding } from './physical-exam-panel.actions';
import { of as ObservableOf } from 'rxjs';

@Injectable()
export class PhysicalExamPanelPlugin implements NgxsPlugin {
  constructor(private notificationService: NotificationsService) {}

  handle(state, action, next) {
    if (getActionTypeFromInstance(action) === EditFinding.type && action.finding.text.length > 255) {
      this.notificationService.error('Maximal finding length is 255 chars.', 'Provided finding result too long.');
      return ObservableOf(state);
    }
    return next(state, action);
  }
}
