import {
  AfterViewInit,
  Directive,
  ElementRef, EventEmitter,
  forwardRef,
  HostListener,
  Inject,
  OnDestroy, Output,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, fromEvent, combineLatest, race } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { isNil } from 'ramda';

interface MutationEvent {
  removedNodes: MutationRecord[];
  addedNodes: MutationRecord[];
  innerText: string[];
}

type DataUpdate = {key: string, value: string[]}[];

@Directive({
  selector: '[paContentEditable]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ContentEditableDirective),
    multi: true
  }]
})
export class ContentEditableDirective implements ControlValueAccessor, AfterViewInit, OnDestroy {

  private mutationsEvent: Subject<MutationEvent> = new Subject();
  private inputEvents: Subject<any> = new Subject();

  private readonly observer = new MutationObserver((mutationsList: MutationRecord[], observer) => {
    const removedNodes = mutationsList.filter(mutation => mutation.removedNodes.length);
    // @ts-ignore
    const addedNodes = mutationsList.filter(mutatilon => mutatilon.target.title === 'parent' && mutatilon.addedNodes.length);
    const innerText = this.elementRef.nativeElement.innerText.split('\n');

    this.mutationsEvent.next({
      addedNodes: addedNodes,
      removedNodes: removedNodes,
      innerText: innerText
    });
  });

  @Output() change = new EventEmitter();

  constructor(
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLDivElement>,
    @Inject(Renderer2) private readonly renderer: Renderer2
  ) { }

  private onTouched = () => {};

  private onChange: (value: DataUpdate) => void = (value) => {
  }

  registerOnChange(onChange: (value: DataUpdate) => DataUpdate) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }

  setDisabledState(disabled: boolean) {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'contenteditable',
      String(!disabled),
    );
  }


  writeValue(value: DataUpdate) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
  }

  ngAfterViewInit() {
    race(
      fromEvent(this.elementRef.nativeElement, 'input'),
      fromEvent(this.elementRef.nativeElement, 'paste'),
      fromEvent(this.elementRef.nativeElement, 'cut')
    ).subscribe(event => {
      this.inputEvents.next(event);
    });
    this.observer.observe(this.elementRef.nativeElement, {
      childList: true,
      characterDataOldValue: true,
      characterData: true,
      subtree: true
    });

    combineLatest(this.inputEvents.asObservable(), this.mutationsEvent.asObservable()).pipe(filter((updateData: [any, MutationEvent]) => updateData.every(item => !isNil(item))), tap(() => {
      this.mutationsEvent.next(null);
      this.inputEvents.next(null);
    })).subscribe(result => {
      const [inputData, mutationData] = result;
      if (inputData.inputType === 'insertParagraph' && mutationData.addedNodes.length) {
        const insertBefore = mutationData.addedNodes[0].addedNodes[0];
        const lineBreakElement = this.renderer.createElement('div');
        this.renderer.setAttribute(lineBreakElement, 'class', 'break');
        this.renderer.appendChild(this.elementRef.nativeElement, lineBreakElement);
        this.renderer.insertBefore(this.elementRef.nativeElement, lineBreakElement, insertBefore);
        this.observer.takeRecords();
      }

      const updatedNodes: {key: string, value: string[]}[] = [];

      this.elementRef.nativeElement.childNodes.forEach(node => {
        // @ts-ignore
        if (!node.title) return;
        // @ts-ignore
        const existingNode = updatedNodes.find(item => item.key === node.title);
        // @ts-ignore
        if (!existingNode) updatedNodes.push({key: node.title, value: [node.innerText]});
        // @ts-ignore
        else existingNode.value.push(node.innerText);
      });

      this.writeValue(updatedNodes);
      this.change.emit(updatedNodes);
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}
