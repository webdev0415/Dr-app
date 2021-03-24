import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {NavigationService} from '../services/navigation.service';
import { UserService } from '../user/user.service';

@Injectable()
export class LoginGuard implements CanActivate, CanLoad {

  constructor(private userService: UserService,
              private navigationService: NavigationService) { }

  checkLogin(): boolean {
    if (!this.userService.isAuthenticated) {
      this.navigationService.navigate('/login');
      return false;
    }
    return true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {
    return this.checkLogin();
  }
}
