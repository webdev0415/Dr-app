import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { DialogService } from '../../../../services/app/dialog.service';

import { AudioSectionComponent } from './audio-section.component';
import { mediaDefault } from '../../../../static/static.vitals';
import { testAudioData } from '../../../../static/test.constants';


@Component({
  selector: 'pa-waveform',
  template: 'Mock Waveform Component'
})
class MockWaveformComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() bodyPart;
  @Input() selectedLocation: any;
  @Input() audit;
  @Input() index;
  @Input() locations;
  @Input() lib;
  @Output() error = new EventEmitter();
  @Output() change = new EventEmitter();

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  setLocationName(name: string): void { }

  selectTrack(location: string, autoplay?: boolean): void { }
}


describe('AudioSectionComponent', generateSpecs({
    componentType: AudioSectionComponent,
    imports: [
      FormsModule,
      BrowserAnimationsModule,
      DialogsTestModule,
      UserTestModule
    ],
    declarations: [
      MockWaveformComponent,
      AudioSectionComponent
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<AudioSectionComponent>) => {
    let component: AudioSectionComponent;
    let serviceSpy: jasmine.SpyObj<DialogService>;

    beforeEach(async(() => {
      serviceSpy = TestBed.get(DialogService);
    }));

    beforeEach(() => {
      component = context.component;
      component.audio =  mediaDefault.heart;
      Object.keys(component.audio).forEach(location => component.audio[location].data = testAudioData);
      component.audit = [];
      component.type = 'Heart';
      component.examData = {examName: 'Cardiovascular', addedExams: [{description: 'RRR. No murmurs, rubs or gallops. No JVD.'}]};

      context.detectChanges();

      component.type = 'Abdomen';
      component.libAudio[component.type] = [{file: 'testurl', name: 'testname'}];

      // context.detectChanges(); @todo: Cannot read property '0' of undefined --> [name]="locations[type][selected]"
    });

    it('should select', () => {
      const bodySide = {'3rd_ics': { data: { raw: {}, low: {}, medium: {}, high: {} } }};
      component.select('3rd ics', 3);
      expect(component.selectedLocation).toBe('3rd_ics');
    });

    it('should check onChange', () => {
      component.onChange('3rd ICS');
      expect(component.selectedLocation).toBe('3rd_ics');
    });

    it('should check onLibChange', () => {
      component.onLibChange('close');
      expect(component.libIndex).toBe(-1);
    });

    it('should view audit', () => {
      // todo: @types/jasmine update error
      // @ts-ignore
      const spy = spyOn(serviceSpy, 'custom').and.returnValue([]);
      component.viewAudit('url');
      expect(spy).toHaveBeenCalled();
    });

    // it('should check isNormal', () => {
    //   component.examData = null;
    //   const isNormal = component.isNormal();
    //   expect(isNormal).toBeFalsy();
    // });
  }
));
