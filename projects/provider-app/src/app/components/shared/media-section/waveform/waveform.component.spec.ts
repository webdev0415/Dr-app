import { async, TestBed } from '@angular/core/testing';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { DialogService } from '../../../../services/app/dialog.service';

import { WaveformComponent } from './waveform.component';
import { BehaviorSubject } from 'rxjs';
import { bodyPartMapping } from '../../../../static/body.constants';
import { MeasurementsMediaService } from 'services/measurements-media.service';


describe('WaveformComponent', generateSpecs({
    componentType: WaveformComponent,
    imports: [
      DialogsTestModule
    ],
    declarations: [
      WaveformComponent
    ],
    providers: [
      {
        provide: MeasurementsMediaService, useValue: { mediaArrayCollection: new BehaviorSubject<any>({ heart: { tricuspid: { data: { raw: {} } } } }) }
      }
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<WaveformComponent>) => {
    let component: WaveformComponent;
    let serviceSpy: jasmine.SpyObj<DialogService>;

    beforeEach(async(() => {
      serviceSpy = TestBed.get(DialogService);
    }));

    beforeEach(() => {
      component = context.component;
      component.locations = bodyPartMapping;
      component.selectedLocation = 'tricuspid';
      component.bodyPart = 'Heart';
      component.fileURL = 'assets/audio/heart/missing.flac';
      component.name = 'location1';
      component.index = 1;
      component.audio = { heart: { tricuspid: { data: { raw: {} } } } };

      context.detectChanges();
    });

    it('should change volume', () => {
      component.changeVolume({value: 0.2});
      expect(component.volume).toEqual(0.2);
      expect(component.gageVolume(component.volume)).toEqual('volume_mute');
      component.changeVolume({value: 0.5});
      expect(component.volume).toEqual(0.5);
      expect(component.gageVolume(component.volume)).toEqual('volume_down');
      component.changeVolume({value: 0.9});
      expect(component.volume).toEqual(0.9);
      expect(component.gageVolume(component.volume)).toEqual('volume_up');
      component.changeVolume({value: 0});
      expect(component.volume).toEqual(0);
      expect(component.gageVolume(component.volume)).toEqual('volume_off');
    });

    it('should play', () => {
      component.waveSurferPlay();
      expect(component.waveSurferInstance.isPlaying).toBeTruthy();
    });

    it('should mute', () => {
      component.mute();
      expect(component.waveSurferInstance.getMute()).toBeTruthy();
      component.mute();
      expect(component.waveSurferInstance.getMute()).toBeFalsy();
    });

    it('should emit prev', () => {
      component.change.subscribe(event => {
        if (typeof event === 'string')
          expect(event).toBe('Tricuspid');
        if (typeof event === 'number')
          expect(event).toBe(0);
      });
      component.changeTrack('prev');
      expect(component.playing).toBeFalsy();
    });

    it('should emit next', () => {
      component.change.subscribe(event => {
        if (typeof event === 'string')
          expect(event).toBe('Mitral/Apex');
        if (typeof event === 'number')
          expect(event).toBe(2);
      });
      component.changeTrack('next');
      expect(component.playing).toBeFalsy();
    });

    it('should select track', () => {
      component.change.subscribe(event => {
        if (typeof event === 'number') {
          expect(event).toBe(2);
        } else {
          expect(event).toBe('3rd_ics');
        }
      });
      component.selectLocation('3rd_ics', 2);
      expect(component.playing).toBeFalsy();
    });

    it('should close', () => {
      component.change.subscribe(event => {
        expect(event).toBe('close');
      });
      component.close();
    });

    it('should get name', () => {
      expect(component.getName('name')).toEqual(jasmine.any(String));
    });

    it('should view audit', () => {
      // todo: @types/jasmine update error
      // @ts-ignore
      const spy = spyOn(serviceSpy, 'custom').and.returnValue([]);
      component.viewAudit();
      expect(spy).toHaveBeenCalled();
    });

    it('should build on resize', (() => {
      window.dispatchEvent(new Event('resize'));
      expect(component).toBeTruthy();
    }));
  }
));
