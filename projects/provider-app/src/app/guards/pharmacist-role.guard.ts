import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';


import { UserRolesEnum } from 'common/enums/user-roles.enum';
import { UserService } from 'user/user.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacistRoleGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.userService.getUserRole === UserRolesEnum.PHARMACIST;
  }
}
