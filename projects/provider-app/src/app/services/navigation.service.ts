import { Injectable } from '@angular/core';
import { ExitPatientRoute, RouteState, State } from './state';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { filter, first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { StateService } from './state.service';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { WindowRefService } from './window-ref.service';

@Injectable()
export class NavigationService {
  private readonly state: State;
  private readonly historyStopUrlRegexps: Array<RegExp>;
  public readonly treatmentUrlRegexp: RegExp;
  public prevUrl;
  public backUrl;

  constructor(
    private router: Router,
    private location: Location,
    private stateService: StateService,
    private windowService: WindowRefService
  ) {
    this.navigationError = this.navigationError.bind(this);
    this.state = stateService.view();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        const nextUrl = unescape(urlAfterRedirects);
        this.state.route.history = [...this.state.route.history, nextUrl];
        this.state.route.current = nextUrl;
        this.prevUrl = nextUrl.split('/');
        this.prevUrl.shift();
      });

    const treatmentUrlRegexp = this.treatmentUrlRegexp = new RegExp('^.+\/treatment(\/edit_drug)?\?.+$');

    this.historyStopUrlRegexps = [
      treatmentUrlRegexp
    ];
  }

  public get routeState(): RouteState {
    return this.state.route;
  }

  public get isPatientsLocation(): boolean {
    return this.routeState.current === '/patients';
  }

  private navigationError(error): Promise<boolean> {
    const msg = 'Navigation error';
    console.error(msg, error);
    this.stateService.app.message.send(msg);
    return Promise.resolve(false);
  }

  public navigate(url: string | Array<any>, extras?: NavigationExtras): Promise<boolean> {
    if (typeof url === 'string') {
      url = [url, ];
    }
    return this.router.navigate(url, extras)
      .catch(this.navigationError);
  }

  public navigateByUrl(url: string): Promise<boolean> {
    return this.router.navigateByUrl(url)
      .catch(this.navigationError);
  }

  public navigateToPatients(setExitPatientRoute = false, extras?: NavigationExtras): Promise<boolean> {
    const url = '/patients';
    if (setExitPatientRoute) {
      this.setExitPatientRoute(url);
    }
    return this.navigate(url, extras);
  }

  public setExitPatientRoute(route: string, extras?: NavigationExtras): void {
    this.state.route.exitPatientRoute = {
      route: route,
      extras: extras
    };
  }

  public getExitPatientRoute(): ExitPatientRoute {
    return this.state.route.exitPatientRoute;
  }

  public goBack(isNativeBack = false): void {
    const hl = this.state.route.history.length;
    const notLastPage = hl > 1;
    const previousUrl = this.state.route.history[hl - 2];
    const previousPageIsNotPatList = previousUrl !== '/patients';
    const physExamEditRedirected = /.+\/physical_exam/.test(this.state.route.history[hl - 2])
      && /.+\/physical_exam\/edit/.test(this.state.route.history[hl - 1]);
    if (notLastPage && previousPageIsNotPatList) {
      const isStop = this.historyStopUrlRegexps.some((regexp: RegExp) => regexp.test(previousUrl));
      if (isStop) {
        if (!isNativeBack) this.location.back();
        return;
      }
      if (physExamEditRedirected) {
        this.navigate(this.state.route.history[hl - 3]);
        this.state.route.history.length = this.state.route.history.length - 3;
      } else {
        const queryParams: Params = this.router.parseUrl(previousUrl).queryParams;
        const extras: NavigationExtras = {
          queryParams: queryParams
        };
        const isIndexOf = previousUrl.indexOf('?') !== -1;
        let nextUrl: string;
        if (isIndexOf) {
          nextUrl = previousUrl.substring(0, previousUrl.indexOf('?'));
        } else {
          nextUrl = previousUrl;
        }
        this.navigate(nextUrl, extras);
        this.state.route.history.length = this.state.route.history.length - 2;
      }
    } else if (notLastPage) {
      const isPdfGagOpen = this.stateService.app.pdf.getIsPdfOpen();
      if (isNativeBack) this.nativeBackNavigationStop();
      if (isPdfGagOpen) return;
      this.navigateToPatients(false, { replaceUrl: true });
    }
  }

  public clearHistory(): void {
    this.state.route.history = [];
  }

  public isAnyHistory(): boolean {
    return this.state.route.history.length > 1;
  }

  public nativeBackNavigationStop(stopUrl?: string): void {
    if (stopUrl === undefined) {
      stopUrl = this.router.url;
    }
    const unescapedStopUrl = unescape(stopUrl);
    const currentUrl = this.location.prepareExternalUrl(unescapedStopUrl);
    this.windowService.nativeWindow.history.pushState(null, '', currentUrl);
  }
}
