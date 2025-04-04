import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  receivedMassages: { text: string, sender: number, userName: string }[] = [];

  receivedMassage(event: { text: string, sender: number, userName: string }) {
    this.receivedMassages.push(event);
  }
}
