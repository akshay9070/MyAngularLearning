import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupFormComponent } from './popup-form/popup-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constParams: any;

  constructor(public dialog: MatDialog) {}

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
}
