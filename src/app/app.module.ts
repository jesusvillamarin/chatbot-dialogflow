import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'ngx-moment';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DialogflowService } from './services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    DialogflowService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ChatComponent]
})
export class AppModule { }


