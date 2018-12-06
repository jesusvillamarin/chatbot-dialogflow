import { Observable, of } from 'rxjs';
import { Message } from './../models/message';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // tslint:disable-next-line:max-line-length
  private messages: Message[] = [new Message('Hola!, soy Luzio, ¿Necesitas ayuda?', 'assets/images/bot.png', new Date(), 'message my-message', 'Luzio', 'message-data')];

  constructor() { }

  saveMessage(message: Message) {
    this.messages.push(message);
  }

  concatMessages(messages: Message[]) {
    this.messages = messages;
  }

  getMessage(): Observable<Message[]> {
    return of(this.messages);
  }
}
