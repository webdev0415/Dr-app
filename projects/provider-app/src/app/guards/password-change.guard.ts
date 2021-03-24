import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'services/storage.service';
import { StateService } from 'services/state.service';
import {NavigationService} from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordChangeGuard implements CanActivate {
  constructor (
    private storageService: StorageService,
    private navigationService: NavigationService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const passChRequired = this.storageService.session.getItem('cpw');
    if (passChRequired) {
      this.navigationService.navigate('/passwd', { queryParams: {action: 'new'}});
      return false;
    }
    return true;
  }
}
