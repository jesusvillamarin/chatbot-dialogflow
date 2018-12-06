import { Component, OnInit } from '@angular/core';
import { Message } from '../../models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Hola!, soy Luzio, ¿Necesitas ayuda?', 'assets/images/bot.png', new Date(), '#5cb85c')
    ];
  }

  ngOnInit() {
  }

}
