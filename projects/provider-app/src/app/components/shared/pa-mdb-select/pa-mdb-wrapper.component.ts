import { Component, ContentChild, Input, } from '@angular/core';

@Component({
  selector: 'pa-mdb-wrapper',
  templateUrl: './pa-mdb-wrapper.component.html',
  styleUrls: ['./pa-mdb-wrapper.component.scss']
})
export class PaMdbWrapperComponent {
  @Input() disabledRule;
  @ContentChild('mdbContent') mdbInstance;
  @ContentChild('disabledContent') inputInstance;

  constructor() { }

}
