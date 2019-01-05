import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../../models';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public message: Message;
  public messages: Message[];

  constructor(private messagesService: StoreService) {

    this.message = new Message('', 'assets/images/user.png');
    messagesService.getMessage().subscribe(res => this.messages = res);

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
