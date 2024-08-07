import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents.component.html',
  styleUrls: ['./view-documents.component.scss']
})
export class ViewDocumentsComponent {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  zoomLevel: number = 1; // Default zoom level
  
  zoomIn() {
    this.zoomLevel += 0.1; // Increase zoom level
  }

  zoomOut() {
    this.zoomLevel -= 0.1; // Decrease zoom level
  }

}
