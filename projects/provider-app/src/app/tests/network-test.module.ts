import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Configuration } from 'app.config';
import { StateService, StorageService } from 'services';


@NgModule({
  imports: [
    RouterTestingModule,
    HttpClientTestingModule
  ],
  declarations: [],
  exports: [],
  providers: [
    StateService,
    MediaMatcher,
    Platform,
    StorageService,
    Configuration
  ]
})
export class NetworkTestModule {}
