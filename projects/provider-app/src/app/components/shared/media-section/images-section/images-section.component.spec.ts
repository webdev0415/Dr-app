import { async, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';

import { DialogService } from '../../../../services/app/dialog.service';
import { SanitizerPipe } from '../../../../utils/sanitizer.pipe';

import { ImagesSectionComponent } from './images-section.component';

@Component({
  selector: 'pa-pe-normal-button',
  template: 'Mock Normal Button Component'
})
class MockNormalButtonComponent {
  @Input() bodyPart: string;
  @Input() normalButtonOnly = false;
}

xdescribe('ImagesSectionComponent', generateSpecs({
    componentType: ImagesSectionComponent,
    imports: [
      DialogsTestModule,
      UserTestModule
    ],
    declarations: [
      ImagesSectionComponent,
      SanitizerPipe,
      MockNormalButtonComponent
    ]
  },
  (context: TestContext<ImagesSectionComponent>) => {
    let component: ImagesSectionComponent;
    let serviceSpy: jasmine.SpyObj<DialogService>;

    beforeEach(async(() => {
      serviceSpy = TestBed.get(DialogService);
    }));

    beforeEach(() => {
      component = context.component;
    });

    it('should view audit', () => {
      // todo: @types/jasmine update error
      // @ts-ignore
      const spy = spyOn(serviceSpy, 'custom').and.returnValue([]);
      component.showFullImg({bodyPart: 'heart', data: [{value: {fileBlob: ''}}], audits: [{}]}, 1);
      expect(spy).toHaveBeenCalled();
    });
}));
