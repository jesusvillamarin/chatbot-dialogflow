export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  background: string;

  constructor(content: string, avatar: string, timestamp?: Date, background?: string){
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.background = background;
  }
}
