import { PhysicalExamResultComponent } from './physical-exam-result.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';

describe('PhysicalExamResultComponent', generateSpecs({
  componentType: PhysicalExamResultComponent,
  imports: [],
  declarations: [PhysicalExamResultComponent],
  beforeEachDetectChanges: false
}, (context: TestContext<PhysicalExamResultComponent>) => {
  let component: PhysicalExamResultComponent;

  beforeEach(() => {
    component = context.component;
    component.finding = {
        selected: true,
        edited: false,
        text: 'test',
        normal: false,
        key: 'testKey',
        code: 'testCode'
      };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.text).toBe(component.finding.text);
  });

  it('should emit on blur event', () => {
    spyOn(component.examResultChange, 'emit');
    expect(component.onBlur()).toBe();
    expect(component.examResultChange.emit).toHaveBeenCalled();
  });

  it('should emit on textarea keydown', () => {
    const topLimitSpy = spyOn(component.topLimit, 'emit');
    const bottomLimitSpy = spyOn(component.bottomLimit, 'emit');
    component.findingsText = {
      ...component.findingsText,
      // @ts-ignore
      nativeElement: {
        selectionStart: 0,
        selectionEnd: 0,
      }
    };
    component.text = '';
    component.textareaKeydown(new KeyboardEvent('ArrowUp', { code: 'ArrowUp'}));
    component.textareaKeydown(new KeyboardEvent('ArrowDown', { code: 'ArrowDown'}));
    component.textareaKeydown(new KeyboardEvent('Delete', { code: 'Delete'}));
    component.findingsText.nativeElement.selectionEnd = 1;
    component.textareaKeydown(new KeyboardEvent('ArrowUp', { code: 'ArrowUp'}));
    component.textareaKeydown(new KeyboardEvent('ArrowDown', { code: 'ArrowDown'}));
    component.textareaKeydown(new KeyboardEvent('Delete', { code: 'Delete'}));
    component.textareaKeydown(new KeyboardEvent('ArrowRight', { code: 'ArrowRight'}));
    component.textareaKeydown(new KeyboardEvent('Backspace', { code: 'Backspace'}));
    component.textareaKeydown(new KeyboardEvent('ArrowLeft', { code: 'ArrowLeft'}));
    expect(topLimitSpy).toHaveBeenCalledTimes(1);
    expect(bottomLimitSpy).toHaveBeenCalledTimes(2);
  });
}));
