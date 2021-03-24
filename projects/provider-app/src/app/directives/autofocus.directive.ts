import { Directive, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { Helpers } from 'utils/helpers';
import { MatInput } from '@angular/material/input';
import { WindowRefService } from '../services/window-ref.service';

@Directive({
  selector: '[paAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit, OnDestroy {
  constructor(private el: ElementRef<MatInput>,
              private changeDetector: ChangeDetectorRef,
              private renderer: Renderer2,
              private windowService: WindowRefService) {
  }

  ngAfterViewInit() {
    const isIOS = Helpers.isPlatformiOS();
    const isIOS11 = Helpers.isPlatformiOS11Before11_3();
    if (isIOS) {
      if (isIOS11) {
        this.windowService.nativeWindow.scrollTo(0, 0);
      }
      this.el.nativeElement.focus();
      this.changeDetector.detectChanges();
    }
    this.renderer.setAttribute(this.el.nativeElement, 'autofocus', '');
  }

  ngOnDestroy(): void {
    this.changeDetector.detach();
  }
}
