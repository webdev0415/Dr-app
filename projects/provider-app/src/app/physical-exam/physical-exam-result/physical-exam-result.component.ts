import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PEFinding } from '../../common/interfaces/physical-exam-panel.interfaces';
import { clone } from 'ramda';

@Component({
  selector: 'pa-physical-exam-result',
  templateUrl: './physical-exam-result.component.html',
  styleUrls: ['./physical-exam-result.component.scss']
})
export class PhysicalExamResultComponent implements OnInit {
  @Input() finding: PEFinding;
  @Input() first: boolean;
  @Input() last: boolean;
  @Input() index: number;
  @Output() examResultChange: EventEmitter<{finding: PEFinding, newText: string}> = new EventEmitter<{finding: PEFinding, newText: string}>();
  @Output() topLimit: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @Output() bottomLimit: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @ViewChild('textarea') textarea;
  public text: string;


  @ViewChild('findingsText') findingsText: ElementRef<HTMLTextAreaElement>;
  @ViewChild('space') space: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
    this.text = clone(this.finding.text);
  }

  onBlur(): void {
    this.examResultChange.emit({finding: this.finding, newText: this.text});
  }

  textareaKeydown(key: KeyboardEvent): void {
    const selectionStart = this.findingsText.nativeElement.selectionStart;
    const selectionEnd = this.findingsText.nativeElement.selectionEnd;
    const zeroSelectionLength = selectionStart === selectionEnd;
    switch (key.code) {
      case 'Backspace':
      case 'ArrowLeft':
      case 'ArrowUp':
        if (selectionStart === 0 && zeroSelectionLength) {
          key.preventDefault();
          key.stopPropagation();
          this.topLimit.emit();
        }
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        if (selectionEnd === this.text.length && zeroSelectionLength) {
          key.preventDefault();
          key.stopPropagation();
          this.bottomLimit.emit();
        }
        break;
      case 'Delete':
        if (selectionEnd === this.text.length && zeroSelectionLength) {
          this.bottomLimit.emit();
          break;
        }
    }
  }

}
