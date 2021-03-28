import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { WavesModule, CardsModule, IconsModule } from 'ng-uikit-pro-standard'

@NgModule({
  imports: [
    CommonModule,
    WavesModule,
    CardsModule,
    IconsModule
  ],
  declarations: [ChatComponent],
  exports: [
    ChatComponent,
    WavesModule,
    CardsModule,
    IconsModule
  ]
})
export class ChatModule { }