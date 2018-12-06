export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  classStyle: string;
  avatarClass: string;
  name: string;


  constructor(    content: string, avatar: string, timestamp?: Date, classStyle?: string, name?: string, avatarClass?: string) {
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.classStyle = classStyle;
    this.name = name;
    this.avatarClass = avatarClass;
  }
}
