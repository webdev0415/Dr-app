import { Injectable } from '@angular/core';

import * as jsPDF from 'jspdf';
import * as html2pdf_ from 'html2pdf.js';
const html2pdf = html2pdf_;

@Injectable()
export class DocumentGeneratorService {
  public static pdfGenerator(element, pageBreakMethod?): Promise<jsPDF> {
    const generator = html2pdf();

    return generator.from(element).set({
      margin: [.5, 0, 1, 0],
      html2canvas: {
        scale: 1,
        logging: false,
        useCORS: true
      },
      image: {
        type: 'jpeg',
        quality: 1
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'p'
      },
      pagebreak: pageBreakMethod || {
        mode: ['css', 'avoid-all']
      }
    }).toPdf().get('pdf');
  }

  public static setPdfConfig(pdfObject: jsPDF): jsPDF {
    const pdfPages = pdfObject.internal.pages;
    const pageWidth = pdfObject.internal.pageSize.getWidth();
    const pageHeight = pdfObject.internal.pageSize.getHeight();

    for (let i = 1; i < pdfPages.length; i++) {
      pdfObject.setPage(i);
      pdfObject.setFontSize(12);
      pdfObject.setTextColor(150);
      pdfObject.text(`Page ${i}`, pageWidth - 1, pageHeight - 0.35);
      pdfObject.setLineWidth(0.01);
      pdfObject.line(pageWidth - 0.5, pageHeight - 0.6, pageWidth - 8, pageHeight - 0.6);
    }
    return pdfObject;
  }

  public static setSignature(pdfObject: jsPDF, signature: string): jsPDF {
    const pdfPages = pdfObject.internal.pages;
    const pageWidth = pdfObject.internal.pageSize.getWidth();
    const pageHeight = pdfObject.internal.pageSize.getHeight();
    // Units in inches
    const signatureX = pageWidth - 8;
    const signatureY = pageHeight - 1.6;
    const signatureWidth = 1.5625;
    const signatureHeight = 0.78125;
    const signatureUnderlineX1 = pageWidth - 6.5;
    const signatureUnderlineX2 = pageWidth - 8;
    const signatureUnderlineY = pageHeight - 0.85;

    for (let i = pdfPages.length - 1; i > pdfPages.length - 2; i--) {
      pdfObject.setPage(i);
      pdfObject.setFontSize(12);
      pdfObject.setTextColor('#000000');
      pdfObject.text('Signature', pageWidth - 7.625, pageHeight - 0.675);
      pdfObject.addImage(signature, 'JPEG', signatureX, signatureY, signatureWidth, signatureHeight);
      pdfObject.line(signatureUnderlineX1, signatureUnderlineY, signatureUnderlineX2, signatureUnderlineY);
    }
    return pdfObject;
  }
}
