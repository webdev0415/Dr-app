import { Injectable, InjectionToken, TemplateRef, Injector, ComponentRef } from '@angular/core';
import { ComponentType, PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { MatDialogConfig, MatDialog, MatDialogRef, DialogRole, DialogPosition } from '@angular/material/dialog';
import { defer, Observable, of } from 'rxjs';
import { mapTo, switchMap, tap } from 'rxjs/operators';
import { stdDialogConfig } from 'static/app.constants';
import { StateService } from 'services/state.service';
import { OverlayConfig, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Router, GuardsCheckEnd } from '@angular/router';
import { PpcustomdialogComponent } from '../../components/shared/popups/ppcustomdialog/ppcustomdialog.component';

/**
 * Custom overlay data injection
 */
export const CUSTOM_OVERLAY_DATA = new InjectionToken<any>('CUSTOM_OVERLAY_DATA');

export declare type AlertDialogColor = 'red' | 'cyan' | 'green';

export interface CustomOverlayConfig {
  hasBackdrop?: boolean;
  backdropClass?: string;
  position?: 'global' | 'connected';
  positionStrategy?: {
    centerVerticallly?: boolean;
    centerHorizontally?: boolean;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    width?: string;
    height?: string;
  };
  /**
   * noop - do nothing
   * close - close if scrolled
   * block - prevent scrolling
   * reposition - move when scrolling
   */
  scrollStrategy?: 'noop' | 'close' | 'block' | 'reposition';
  closeStrategy?: {
    backdropClick?: boolean;
    routing?: boolean;
  };
}

/**
 * Custom Overlay Remote Controller
 * @constructor ref: Overlay Reference
 * @method close Close current overlay
 */
@Injectable()
 export class CustomOverlayRef {
  constructor(
    private ref: OverlayRef,
    private stateService: StateService
  ) {}

  close(): void {
    this.ref.dispose();
    this.stateService.app.dialog.setDialogOpenedStatus(false);
    delete this.ref;
  }
}

@Injectable()
export class DialogService {
  private readonly defaultConfig: CustomOverlayConfig = {
    backdropClass: 'pa-dialog-backdrop',
    hasBackdrop: true,
    positionStrategy: {
      centerHorizontally: true,
      centerVerticallly: true
    },
    scrollStrategy: 'block',
    closeStrategy: {
      routing: true
    }
  };
  private readonly alertProperties = {
    autoFocus: false,
    closeOnNavigation: false,
    disableClose: true,
    minWidth: '100%',
    maxWidth: '100vw',
    minHeight: 'auto',
    width: '100%',
    position: <DialogPosition> {
      top: '0'
    },
    panelClass: ['alert-dialog'],
    role: <DialogRole> 'alertdialog'
  };

  constructor(
    private stateService: StateService,
    public dialog: MatDialog,
    private overlay: Overlay,
    private injector: Injector,
    private router: Router
  ) { }

  /**
   * Disappear automatically popup window (dialog) after timeout
   * @param dialogRef
   * @param timeout (in seconds)
   */
  private closeTimeout<T>(dialogRef: MatDialogRef<T>, timeout: number): void {
    setTimeout(() => {
      dialogRef.close();
    }, timeout * 1000);
  }

  /**
   * Show component as a popup window (dialog)
   * @param {ComponentType<K> | TemplateRef<K>}component component reference
   * @param options
   * @param timeout (in seconds)
   * @returns observable of dialog result
   */
  public open<K>(component: ComponentType<any> | TemplateRef<any>, options?: any | MatDialogConfig, timeout?: number, preventBlurBackground?: boolean): Observable<K> {
    const dialogOptions: MatDialogConfig = Object.assign(new MatDialogConfig(), stdDialogConfig, options);
    return defer(() => of(this.dialog.open(component, dialogOptions))).pipe(
      switchMap((dialogRef: MatDialogRef<K>) => dialogRef.afterOpened().pipe(tap(() => {
        if (!preventBlurBackground) this.stateService.app.dialog.setDialogOpenedStatus(true);
        if (timeout) this.closeTimeout(dialogRef, timeout);
      }), mapTo(dialogRef))),
      switchMap((dialogRef: MatDialogRef<K>) => dialogRef.beforeClosed().pipe(tap(() => this.stateService.app.dialog.setDialogOpenedStatus(false)), mapTo(dialogRef))),
      switchMap((dialogRef: MatDialogRef<K>) => dialogRef.afterClosed()),
    );
  }

  /**
   * Show alert popup window (dialog)
   * @param options
   * @param color <AlertDialogColor> default: 'red'
   * @param timeout (in seconds)
   * @returns observable of dialog result
   */
  public openAlert(options?: {} | MatDialogConfig, color?: AlertDialogColor, timeout?: number): Observable<any> {
    const alertData = {
      isAlertDialog: true
    };
    const alertOptions = new MatDialogConfig();
    if (options) {
      Object.assign(alertOptions, options);
    }
    Object.assign(alertOptions.data, alertData);
    Object.assign(alertOptions, this.alertProperties);

    if (!color) color = 'red';
    const colorAlertClass = `alert-dialog-color-${color}`;

    if (alertOptions.panelClass instanceof Array) {
      alertOptions.panelClass = Array.from(this.alertProperties.panelClass);
      alertOptions.panelClass.push(colorAlertClass);
    }

    return this.open(PpcustomdialogComponent, alertOptions, timeout);
  }

  /**
   * Show component as a custom overlay pane
   * @param {ComponentType<T> | TemplateRef<T>}component component reference
   * @param dialogData
   * @param {CustomOverlayConfig}options overlay config
   * @param {String}overlayName overlay name for identify what to close by ESC
   * @returns nothing (yet)
   */
  public custom<T>(component: ComponentType<T>, dialogData?: any, options?: CustomOverlayConfig, overlayName?: string): void {
    const cfg = Object.assign(this.defaultConfig, options);
    const overlay = this.customOverlayCreate(cfg);
    this.stateService.app.dialog.setDialogOpenedStatus(true);
    this.stateService.app.dialog.pushOverlayName(overlayName);
    const componentInstance = this.customOverlayAttachComponent(overlay, component, dialogData);
  }

  /**
   * Configure overlay before creation
   * @param {CustomOverlayConfig}options custom options
   */
  private customOverlayPreConfigurator(options?: CustomOverlayConfig): OverlayConfig {
    const config = new OverlayConfig({
      hasBackdrop: this.defaultConfig.hasBackdrop,
      backdropClass: this.defaultConfig.backdropClass,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      width: '100%',
      height: '100%'
    });

    if (options) {
      const globalPos = this.overlay.position().global();
      const pS = options.positionStrategy;
      if (pS.centerHorizontally) globalPos.centerHorizontally();
      if (pS.centerVerticallly) globalPos.centerVertically();
      if (pS.width) globalPos.width(pS.width); // tslint:disable-line
      if (pS.height) globalPos.width(pS.height); // tslint:disable-line
      if (pS.top) globalPos.top(pS.top);
      if (pS.right) globalPos.top(pS.right);
      if (pS.bottom) globalPos.top(pS.bottom);
      if (pS.left) globalPos.top(pS.left);
      config.positionStrategy = globalPos;

      if (options.scrollStrategy) switch (options.scrollStrategy) {
        case 'close': config.scrollStrategy = this.overlay.scrollStrategies.close(); break;
        case 'block': config.scrollStrategy = this.overlay.scrollStrategies.block(); break;
        case 'noop': config.scrollStrategy = this.overlay.scrollStrategies.noop(); break;
        case 'reposition': config.scrollStrategy = this.overlay.scrollStrategies.reposition(); break;
      }

      // TODO: implement connected overlays
      // const connectedPos = this.overlay.position().connectedTo(...);
    }

    return config;
  }

  /**
   * Configure overlay after creation (required overlay reference)
   * @param overlay created overlay
   * @param options custom options
   */
  private customOverlayPostConfigurator(overlay: OverlayRef, options?: CustomOverlayConfig): void {
    if (options && options.closeStrategy) {
      const cS = options.closeStrategy;
      if (cS.backdropClick) {
        const backdropClickEvent = overlay.backdropClick().subscribe(click => {
          overlay.dispose();
          if (backdropClickEvent) backdropClickEvent.unsubscribe();
        });
      }
      if (cS.routing) {
        // ? should it be unsubscribed ?
        this.router.events.subscribe(ev => {
          if (ev instanceof GuardsCheckEnd && ev.shouldActivate)
            overlay.dispose();
        });
      }
    }
  }

  /**
   * Inject CustomOverlayRef and data, which can be passed and used in an overlay
   * @param overlay created overlay
   * @param data any data
   */
  private customOverlayCreateInjector(overlay: CustomOverlayRef, data: any): PortalInjector {
    const tokens = new WeakMap();
    tokens.set(CustomOverlayRef, overlay);
    tokens.set(CUSTOM_OVERLAY_DATA, data);
    return new PortalInjector(this.injector, tokens);
  }

  /**
   * Create overlay
   * @param options custom options
   * @returns {OverlayRef} overlay reference
   */
  private customOverlayCreate(options?: CustomOverlayConfig): OverlayRef {
    const config: OverlayConfig = this.customOverlayPreConfigurator(options);
    const overlay = this.overlay.create(config);
    this.customOverlayPostConfigurator(overlay, options);
    return overlay;
  }

  /**
   * Attach a component to an overlay
   * @param overlay created overlay
   * @param component component to attach
   * @param data data to pass to an overlay
   */
  private customOverlayAttachComponent<T>(overlay: OverlayRef, component: ComponentType<T>, data?: any): ComponentRef<T> {
    const rc = new CustomOverlayRef(overlay, this.stateService);
    const injector = this.customOverlayCreateInjector(rc, data);
    const portal = new ComponentPortal(component, null, injector);
    return overlay.attach(portal);
  }

}
