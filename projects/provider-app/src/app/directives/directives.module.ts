import { NgModule } from '@angular/core';

// Directives
import { AutoFocusDirective } from './autofocus.directive';
import { ContentEditableDirective } from './contenteditable.directive';

@NgModule({
  imports: [],
  declarations: [
    AutoFocusDirective,
    ContentEditableDirective
  ],
  exports: [
    AutoFocusDirective,
    ContentEditableDirective
  ],
  providers: []
})
export class DirectivesModule { }
