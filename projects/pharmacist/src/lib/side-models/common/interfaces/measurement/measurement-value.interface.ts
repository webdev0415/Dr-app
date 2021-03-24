import { SafeResourceUrl } from '@angular/platform-browser';

export interface Value {
  createdAt: string;
  fileType: string;
  status: string;
  fileName: string;
  bodySide: string;
  value: number;
  bodyPart: string;
  file: string;
  fileBlob?: SafeResourceUrl;
}
