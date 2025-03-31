import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  receivedMassages: { text: string, sender: number }[] = [];

  receivedMassage(event: { text: string, sender: number }) {
    this.receivedMassages.push(event);
  }
}
