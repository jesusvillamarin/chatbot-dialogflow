import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';
import { DialogflowService } from '../../services';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message: Message;

  @Input('messages')
  private messages: Message[];

  constructor(private dialogFlowService: DialogflowService, private messageService: StoreService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.message.classStyle = 'message other-message';
    this.message.avatarClass = 'message-data align-right';
    this.message.name = 'Aspirante';
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp, 'message my-message', 'Luzio', 'message-data')
      );
      this.messageService.concatMessages(this.messages);
    });

    this.message = new Message('', 'assets/images/user.png');
  }

}
