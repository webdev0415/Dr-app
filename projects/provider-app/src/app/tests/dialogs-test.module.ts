import { ComponentType } from '@angular/cdk/portal';
import { ModuleWithProviders, NgModule, TemplateRef, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/Observable';
import { AlertDialogColor, CustomOverlayConfig, DialogService } from '../services/app/dialog.service';


interface MatDialogInterface {
  closeAll(): void;
}


@Injectable()
export class MockDialogService {
  public dialog: MatDialogInterface;

  constructor() {
    this.dialog = {
      closeAll: (): void => {}
    };
  }

  public open<T>(component: ComponentType<T> | TemplateRef<T>, options?: any | MatDialogConfig, timeout?: number): Observable<any> {
    return of(true);
  }

  public openAlert(options?: {} | MatDialogConfig, color?: AlertDialogColor, timeout?: number): Observable<any> {
    return of(true);
  }

  public custom<T>(component: ComponentType<T>, dialogData?: any, options?: CustomOverlayConfig, overlayName?: string): void {}
}

// todo: @types/jasmine update error
// @ts-ignore
const dialogSpy = jasmine.createSpyObj<MatDialogRef<any>>(['backdropClick', 'keydownEvents', 'close', 'closeAll']);
dialogSpy.backdropClick.and.returnValue(of(false));
dialogSpy.keydownEvents.and.returnValue(of({code: 'alt'} as KeyboardEvent));

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: DialogService, useClass: MockDialogService
    },
    {provide: MatDialogRef, useValue: dialogSpy},
    {provide: MAT_DIALOG_DATA, useValue: {}}
  ]
})
export class DialogsTestModule {
  static withoutMock(): ModuleWithProviders<DialogsTestModule> {
    return {
      ngModule: DialogsTestModule,
      providers: [
        DialogService
      ]
    };
  }
}
