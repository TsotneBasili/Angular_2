import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  receivedMassages: { text: string, sender: number }[] = [];

  receivedMassage(event: { text: string, sender: number }) {
    this.receivedMassages.push(event);
  }

  // receivedMassages: string[] = []

  // receivedMassage(ev: string) {
  //   this.receivedMassages.push(ev)
  // }
}
