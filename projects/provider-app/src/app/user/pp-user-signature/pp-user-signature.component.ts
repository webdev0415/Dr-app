import { Component, Inject, OnDestroy, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CanvasWhiteboardComponent, CanvasWhiteboardOptions, CanvasWhiteboardService } from 'ng2-canvas-whiteboard';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'pa-pp-user-signature',
  templateUrl: './pp-user-signature.component.html',
  styleUrls: ['./pp-user-signature.component.scss']
})
export class PpUserSignatureComponent implements OnDestroy {
  @ViewChild('canvasWhiteboard', { static: true }) canvasWhiteboard: CanvasWhiteboardComponent;

  canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: false,
    drawingEnabled: true,
    clearButtonEnabled: false,
    undoButtonEnabled: false,
    redoButtonEnabled: false,
    colorPickerEnabled: false,
    saveDataButtonEnabled: false,
    lineWidth: 3,
    strokeColor: 'rgb(0,0,0)',
    shouldDownloadDrawing: false,
    shapeSelectorEnabled: false
  };

  public isSignatureValid = false;

  private destroy$: Subject<void> = new Subject();

  constructor(
    private dialogRef: MatDialogRef<PpUserSignatureComponent>,
    private canvasWhiteboardService: CanvasWhiteboardService,
    @Inject(MAT_DIALOG_DATA) public data: { username: string }
  ) {
    this.dialogRef.backdropClick().pipe(takeUntil(this.destroy$)).subscribe(() => this.dialogRef.close([null, null]));
    this.dialogRef.keydownEvents().pipe(takeUntil(this.destroy$), filter(event => event.key === 'Esc' || event.key === 'Escape')).subscribe(() => this.dialogRef.close([null, null]));
  }

  onBatchUpdate(): void {
    if (!this.isSignatureValid) {
      this.isSignatureValid = true;
    }
  }

  clearSignature(): void {
    this.canvasWhiteboardService.clearCanvas();
    this.isSignatureValid = false;
  }

  save(): void {
    const signatureString = this.canvasWhiteboard.generateCanvasDataUrl('image/jpeg', 0.3);
    this.canvasWhiteboard.generateCanvasBlob((blob: BlobPart) => {
      const signatureFile = new File([blob], `${this.data.username}-signature.jpeg`, {type: 'image/jpeg'});
      this.dialogRef.close([signatureFile, signatureString]);
    }, 'image/jpeg', 0.3);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
