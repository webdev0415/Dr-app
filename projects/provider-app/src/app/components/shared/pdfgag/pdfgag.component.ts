import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { StateService } from 'services/state.service';
import { Helpers } from 'utils/helpers';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'pa-pdfgag',
  templateUrl: './pdfgag.component.html',
  styleUrls: ['./pdfgag.component.scss']
})
export class PdfgagComponent implements OnInit {

  @Input() link: SafeResourceUrl;

  public readonly helpers = Helpers;

  constructor(
    private stateService: StateService,
    private navigationService: NavigationService) {
    this.navigationService.nativeBackNavigationStop();
  }

  ngOnInit(): void {
    this.stateService.app.pdf.setIsPdfOpen(true);
  }

  public closeComponent() {
    this.stateService.app.pdf.emitPdfClosed();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.closeComponent();
  }

  openOnIOS() {
    window.open(this.link.toString(), '_blank');
    this.closeComponent();
  }

}

