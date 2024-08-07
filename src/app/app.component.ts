import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constParams: any;
data:any;
  constructor(private spinner: NgxSpinnerService,public dialog: MatDialog) {}
  ngOnInit() {
    // Show spinner when component initializes
    
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }
  openDialog(): void {
    
    const dialogRef = this.dialog.open(PopupFormComponent,{
      width: '700px', // Set the width of the dialog
      disableClose: true, // Prevent the dialog from closing when clicking outside

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const clientId = result.clientId;
        const documentId = result.documentId;

        console.log('Client Id:', clientId);
        console.log('Document Id:', documentId);
      }
    });
  }  
  isLoadingPPPDF = true; // Controls visibility of the PPPDF section spinner
  isLoadingRight = true; // Controls visibility of the right section spinner

  // Simulate loading
  startLoading() {
    this.isLoadingPPPDF = true;
    this.isLoadingRight = true;

    // Simulate API call
    setTimeout(() => {
      this.isLoadingPPPDF = false;
    }, 2000); // Simulate loading for PPPDF

    setTimeout(() => {
      this.isLoadingRight = false;
    }, 4000); // Simulate loading for right section
  }

  stopLoading() {
    this.isLoadingPPPDF = false;
    this.isLoadingRight = false;
  }

}
