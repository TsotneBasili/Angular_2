import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() senderId!: number;
  @Input() userName: string = "";
  @Input() text: string = "";
  // @Output() sendMassage: EventEmitter<string> = new EventEmitter
  @Output() sendMassage: EventEmitter<{ text: string, sender: number, userName: string }> = new EventEmitter();
  @Input() receivedMassages: { text: string, sender: number, userName: string }[] = [];

 

  sentMassage() {
    // this.sendMassage.emit(this.text)
    if (this.text === ""){
      return
    }else{
      this.sendMassage.emit({ text: this.text, sender: this.senderId, userName: this.userName });
        this.text = "";
    }
  }
  
}
