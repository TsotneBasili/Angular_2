import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() senderId!: number;
  @Input() text: string = "";
  // @Output() sendMassage: EventEmitter<string> = new EventEmitter
  @Output() sendMassage: EventEmitter<{ text: string, sender: number }> = new EventEmitter();
  @Input() receivedMassages: { text: string, sender: number }[] = [];

 

  sentMassage() {
    // this.sendMassage.emit(this.text)
    if (this.text === ""){
      return
    }else{
      this.sendMassage.emit({ text: this.text, sender: this.senderId });
        this.text = "";
    }
  }
  
}
