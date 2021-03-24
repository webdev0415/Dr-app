import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { PpUnsavedChangesConfirmationComponent } from 'components/shared/popups/pp-unsaved-changes-confirmation/pp-unsaved-changes-confirmation.component';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ComponentCanDeactivate {
  canDeactivate(): boolean | Observable<boolean>;
}

export const CanDeactivateState = {
  defendAgainstBrowserBackButton: false,
};

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {

  constructor(
    readonly matDialog: MatDialog,
  ) {
  }

  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
    return component.canDeactivate() || this.matDialog.open<PpUnsavedChangesConfirmationComponent, void, boolean>(PpUnsavedChangesConfirmationComponent, {
      disableClose: true,
    }).afterClosed().pipe(
      tap(confirmed => {
        if (!confirmed && CanDeactivateState.defendAgainstBrowserBackButton) {
          history.pushState(null, '', '');
        }
      })
    );
  }
}
