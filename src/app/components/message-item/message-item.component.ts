import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Message } from '../../models';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')  private message: Message;

  @Output() scrollDown = new EventEmitter<void>();

  constructor() {
   }

  ngOnInit() {
      this.scrollDown.emit();
  }

}
