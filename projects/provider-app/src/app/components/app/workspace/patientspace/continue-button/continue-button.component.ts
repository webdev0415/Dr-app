import { AfterViewInit, Component, ElementRef, Input, Output, Renderer2 } from '@angular/core';
import { ContinueButton } from './continue-button';
import { StateService } from 'services/state.service';
import { NavigationService } from 'services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'user/user.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'pa-continue-button',
  templateUrl: './continue-button.component.html',
  styleUrls: ['./continue-button.component.scss']
})
export class ContinueButtonComponent extends ContinueButton implements AfterViewInit {
  @Output() public beforeContinue: EventEmitter<void> = new EventEmitter<void>();
  @Input() private class: string | undefined;
  @Input() private defaultOperation = true;
  @Input() public disabled = false;

  constructor(
    private stateService: StateService,
    protected userService: UserService,
    private navigationService: NavigationService,
    private activeRoute: ActivatedRoute,
    private renderer: Renderer2,
    private elementRef: ElementRef) {
    super(userService);
  }

  private continueOperation(): void {
    this.beforeContinue.emit();
    const params = 'id' in this.activeRoute.snapshot.params ? this.activeRoute.snapshot.params : this.activeRoute.parent.snapshot.params;
    this.navigationService.navigate([
      'patients',
      params['id'],
      'diagnosis'
    ]);
  }

  public isPharmacistUserRole(): boolean {
    return super.isPharmacistUserRole();
  }

  public isPractitionerUserRole(): boolean {
    return super.isPractitionerUserRole();
  }

  public onClick(): void {
    if (this.defaultOperation) this.continueOperation();
  }

  ngAfterViewInit(): void {
    if (this.class === undefined) return;
    if (this.isClerkOrOMUserRole()) return;
    const el = this.elementRef.nativeElement.querySelector('button');
    this.class.split(' ').forEach((value: string) => {
      this.renderer.addClass(el, value);
    });
  }
}
