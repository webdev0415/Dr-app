import { StateBottomButtons } from '../bottom-space/interfaces';
import { UserService } from 'user/user.service';
import { UserRolesEnum } from '../../../../../common/enums/user-roles.enum';


export abstract class ContinueButton {
  private readonly _userRole: string;

  protected constructor(
    protected userService: UserService
  ) {
    this._userRole = this.userService.getUserRole;
  }

  protected isClerkOrOMUserRole(): boolean {
    return this._userRole === UserRolesEnum.OFFICE_CLERK || this._userRole === UserRolesEnum.OPERATIONS_MANAGER;
  }

  protected  isPractitionerUserRole(): boolean {
    return this._userRole === UserRolesEnum.PRACTITIONER;
  }

  protected isPharmacistUserRole(): boolean {
    return this._userRole === UserRolesEnum.PHARMACIST;
  }

  protected get isOMUserRole(): boolean {
    return this._userRole === UserRolesEnum.OPERATIONS_MANAGER;
  }

  getShownContinueButton(): StateBottomButtons {
    return {
      'continue': this.isPractitionerUserRole() || this.isPharmacistUserRole()
    };
  }
}
