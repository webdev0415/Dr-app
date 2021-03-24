import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';


import { OpentokService } from './opentok.service';
import { environment as appEnvironment } from '../../environments';
import { APP_ENVIRONMENT } from './environment.token';

import { MessageReceivedTimePipe } from './message-received-time.pipe';

import { TelemedicineComponent } from './telemedicine/telemedicine.component';
import { TelemedicineChatComponent } from './telemedicine-chat/telemedicine-chat.component';
import { TelemedicineStreamsComponent } from './telemedicine-streams/telemedicine-streams.component';
import { TelemedicineControlsComponent } from './telemedicine-controls/telemedicine-controls.component';
import { TelemedicineTestComponent } from './telemedicine-test/telemedicine-test.component';

import { CustomFontAwesomeModule } from 'components/fontawesome.module';

@NgModule({
  declarations: [
    TelemedicineComponent,
    TelemedicineChatComponent,
    TelemedicineStreamsComponent,
    TelemedicineControlsComponent,
    MessageReceivedTimePipe,
    TelemedicineTestComponent
  ],
  imports: [
    CustomFontAwesomeModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTabsModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ScrollingModule,
    MatBadgeModule
  ],
  providers: [
    OpentokService,
    { provide: APP_ENVIRONMENT, useValue: appEnvironment }
  ]
})
export class TelemedicineModule {
}
