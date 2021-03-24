import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {NavigationService} from '../services/navigation.service';
import { UserService } from '../user/user.service';

@Injectable()
export class LogoutGuard implements CanActivate, CanLoad {

  constructor(private userService: UserService,
              private navigationService: NavigationService) { }

  checkLogout(): boolean {
    if (this.userService.isAuthenticated) {
      this.navigationService.navigate('/patients');
      return false;
    }
    return true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogout();
  }

  canLoad(route: Route): boolean {
    return this.checkLogout();
  }
}
