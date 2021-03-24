import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';

import { StateService } from 'services';
import { MediaType } from '../../../common/models/data.model';
import { MediaSectionComponent } from './media-section.component';
import { mediaDefault } from 'static/static.vitals';


@Component({
  selector: 'pa-images-section',
  template: 'Mock Images Section Component'
})
class MockImagesSectionComponent implements OnDestroy {
  @Input() patient: any;
  @Input() images: any[] = [];
  @Output() editExam: EventEmitter<any> = new EventEmitter<any>();
  @Output() addNorm: EventEmitter<any> = new EventEmitter<any>();

  ngOnDestroy(): void {
  }
}

@Component({
  selector: 'pa-audio-section',
  template: 'Mock Audio Section Component'
})
class MockAudioSectionComponent implements OnInit {
  @Input() audio: any[] = [];
  @Input() audit: any[] = [];
  @Input() type: MediaType;
  @Input() examData: any;
  @Output() editExam: EventEmitter<any> = new EventEmitter<any>();
  @Output() addNorm: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }
}


xdescribe('MediaSectionComponent', generateSpecs({
    componentType: MediaSectionComponent,
    imports: [
      DialogsTestModule,
      BrowserAnimationsModule,
      UserTestModule
    ],
    declarations: [
      MockImagesSectionComponent,
      MockAudioSectionComponent,
      MediaSectionComponent
    ],
    beforeEachDetectChanges: false,
    beforeComponentFixtureCreated: false
  },
  (context: TestContext<MediaSectionComponent>) => {
    let component: MediaSectionComponent;
    let stateService: StateService;

    beforeEach(async(() => {
      stateService = TestBed.get(StateService);
    }));

    beforeEach(() => {
      component = context.componentFixtureCreate();
      component.examData = {examName: 'Cardiovascular', addedExams: []};
      component.type = 'Cardiovascular';
      component.media = mediaDefault;

      context.detectChanges();
    });

    it('should emit reviewEmitted event', () => {
      component.reviewEmitted.subscribe(() => {
        expect(true).toBeTruthy();
      });
      component.review();
      expect(component.reviewed).toBeTruthy();
    });
  }
));
