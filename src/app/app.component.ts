import { ChatComponent } from './components/chat/chat.component';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  openBot() {
    const dialogRef = this.dialog.open(ChatComponent, {
    });

    dialogRef.afterClosed().subscribe( res => {
    });

  }

}
