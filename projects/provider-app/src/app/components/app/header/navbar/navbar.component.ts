import { Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Event, NavigationEnd, NavigationExtras, Router } from '@angular/router';

import { Observable, of as ObservableOf, ReplaySubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/internal/operators';
import { NavbarComponent as MDBNavbarComponent, SBItemComponent } from 'ng-uikit-pro-standard';

import { StateService } from 'services/state.service';
import { DataService } from 'services/data.service';
import { DialogService } from 'services/app/dialog.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { NavigationService } from 'services/navigation.service';
import { UserRolesEnum } from 'common/enums/user-roles.enum';
import { getNavBarLinks } from './prepare';
import { ActiveLink, Link, NavList } from './interfaces';
import { Roles } from './types';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { buildURLQuery, NavBarUtils } from './utils';
import { UserService } from 'user/user.service';

@Component({
  selector: 'pa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('mdbNavbar', { static: true }) mdbNavbar: MDBNavbarComponent;
  @ViewChildren(SBItemComponent) categoriesLinks: QueryList<SBItemComponent>[];

  private subscribes: Subscription[] = [];
  private changeActiveLinkSubscription: ReplaySubject<void> = new ReplaySubject(2);
  private activeLink: ActiveLink;
  private instanceNavBarUtils: NavBarUtils;
  public navList: Array<Link>;
  public current_id: number | undefined;
  public viewOnly: boolean;
  public role: UserRolesEnum;

  constructor(
    private stateService: StateService,
    private router: Router,
    private navigationService: NavigationService,
    private dataService: DataService,
    private dialogSubscribesService: DialogSubscribesService,
    private userService: UserService,
    public dialogService: DialogService) { }

  ngOnInit(): void {
    this.role = this.userService.getUserRole;
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);

    this.stateService.patient.getCurrent()
      .pipe(filter((val: PatientListEntity) => val !== null)).subscribe((currentPatient: PatientListEntity) => {
      this.current_id = currentPatient.patient_id;
    });

    const instanceNavBarUtils = new NavBarUtils(this.stateService,
      this.dataService, this.current_id, this.navigationService, this.dialogService, this.dialogSubscribesService, this.viewOnly);
    const navDict: NavList = getNavBarLinks(instanceNavBarUtils);

    this.instanceNavBarUtils = instanceNavBarUtils;

    this.initNavList(navDict);
    this.clearActiveLink();

    this.subscribes.push(
      this.router.events.pipe(filter((event: Event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
            this.setActiveLinkOfCurrentFullUrl(event.urlAfterRedirects);
            this.changeActiveLinkSubscription.next();
          }
        ));
  }

  private initNavList(navDict: NavList): void {
    let navList: Array<Link> = Object.keys(navDict).map((key: string) => {
      const link = navDict[key];
      link.key = key;
      return link;
    });
    navList = navList.filter((value: Link) => this.isView(value));
    this.navList = navList;
  }

  private setActiveLink(active: boolean, key: string | null, section: number | null): void {
    this.activeLink = {
      active: active,
      key: key,
      section: section
    };
  }

  private clearActiveLink(): void {
    this.setActiveLink(false, null, null);
  }

  private getLinkQueryParams(link: Link) {
    return link.queryParamsCallback.bind(this.instanceNavBarUtils)();
  }

  private buildFullUrl(url: string | Array<string|number>): Array<string|number> {
    if (!Array.isArray(url)) {
      url = url === '' ? [] : [url, ];
    }
    return [
      'patients',
      this.current_id,
      ...url
    ];
  }

  private _isDisabled(link: Link): boolean {
    return link.disabledCallback ? link.disabledCallback.bind(this.instanceNavBarUtils)() : false;
  }

  private setActiveLinkOfCurrentFullUrl(currentFullUrl: string): void {
    const BreakException = {};

    this.clearActiveLink();

    const setActiveLinkProcess = (links: Array<Link>, isSection: boolean, linkKey) => {
      links.forEach((link: Link, index: number) => {
        if (link.url === undefined) {
          if (link.sections) {
            setActiveLinkProcess(link.sections, true, link.key);
          }
          return;
        }

        const fullUrlArray = this.buildFullUrl(link.url);
        let fullUrl = '/' + fullUrlArray.join('/');
        let currentUrl: string = currentFullUrl;

        if (link.ignoreQueryParams) {
          const isIndexOf = currentFullUrl.indexOf('?') !== -1;
          if (isIndexOf) {
            currentUrl = currentFullUrl.substring(0, currentFullUrl.indexOf('?'));
          }
        } else {
          const hasQueryParamsCallback = 'queryParamsCallback' in link;
          if (hasQueryParamsCallback) {
            const queryParams = this.getLinkQueryParams(link);
            fullUrl = fullUrl + '?' + buildURLQuery(queryParams);
          }
        }

        const hasNotClickCallback = !('onClickCallback' in link);
        let isActive: boolean;
        if (link.exact) {
          isActive = currentUrl === fullUrl && hasNotClickCallback;
        } else {
          isActive = currentUrl.includes(fullUrl) && hasNotClickCallback;
        }

        if (isActive) {
          this.setActiveLink(true,
            isSection ? linkKey : link.key,
            isSection ? index : null);
          throw BreakException;
        }

        if (link.sections) {
          setActiveLinkProcess(link.sections, true, link.key);
        }
      });
    };
    try {
      setActiveLinkProcess(this.navList, false, null);
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  }

  private _isLinkActive(link: Link, index: number | null): boolean {
    const activeLink: ActiveLink = this.activeLink;
    return activeLink.key === link.key && activeLink.active && index === activeLink.section;
  }

  private isView(link: Link): boolean {
    const isCurrentRoleView = link.viewForRoles ? link.viewForRoles.includes(<Roles>this.role) : true;
    const isShow = 'showCallback' in link ? link.showCallback() : true;
    const sectionsValidationPassed = link.sections && link.sections.length ? link.sections.some(section => this.isView(section)) : true;
    if (this.viewOnly) {
      return isShow && link.forViewOnly && isCurrentRoleView && sectionsValidationPassed;
    }
    return isShow && isCurrentRoleView && !link.viewOnly && sectionsValidationPassed;
  }

  public isLinkActive(link: Link, parentLink: Link | null): Observable<boolean> {
    if (link.url === undefined) return ObservableOf(false);
    if ('activeCallback' in link) {
      const active = link.activeCallback();
      return ObservableOf(active);
    }
    let index: number;
    if (parentLink !== null) {
      index = parentLink.sections.findIndex((value: Link) => value === link);
    } else {
      index = null;
    }
    const isActive = this._isLinkActive(parentLink ? parentLink : link, index);
    return ObservableOf(isActive);
  }

  public isGroupActive(parentLink: Link): Observable<boolean> {
    if (!parentLink.sections) return ObservableOf(false);
    return ObservableOf(parentLink.sections
      .some((value: Link, index: number) => this.isView(value) && this._isLinkActive(parentLink, index))
    );
  }

  public onLinkClick(link: Link): void {
    if (!link || this._isDisabled(link)) return;

    this.mdbNavbar.hide();
    if ('onClickCallback' in link) { link.onClickCallback.bind(this.instanceNavBarUtils)(); }

    const url: string | undefined | Array<string|number> = link.url;

    if (url !== undefined) {
      const extras: NavigationExtras = {};
      if ('queryParamsCallback' in link) {
        extras['queryParams'] = this.getLinkQueryParams(link);
      }
      if ('queryParamsHandling' in link) {
        extras['queryParamsHandling'] = link.queryParamsHandling;
      }
      const fullUrlArray = this.buildFullUrl(url);
      this.navigationService.navigate(fullUrlArray, extras);
    }
  }

  public isDisabled(link: Link): Observable<boolean> {
    const isDisabled = this._isDisabled(link);
    return ObservableOf(isDisabled);
  }

  public linkSections(link: Link): Observable<Array<Link>> | null {
    let sections: Array<Link> | undefined = link.sections;
    if (sections === undefined) return null;
    sections = sections.filter((value: Link) => this.isView(value));
    return ObservableOf(sections);
  }

  public linkExpandable(link: Link): boolean {
    return link.expandable !== undefined && link.expandable;
  }

  onChangeShown(value: boolean): void {
    this.stateService.app.sideBar.setShown(value);
  }

  ngOnDestroy(): void {
    this.subscribes.forEach(s => s.unsubscribe());
    this.instanceNavBarUtils.onDestroy();
  }
}
