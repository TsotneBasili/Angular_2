import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    title: string = 'profile';

    name = 'Alice'
    age: number = 25
    input = ''
    charCount = this.input.length

    get inputSet (){
      return this.input
    }

    set inputSet (value){
      this.input = value;
      this.charCount = value.length;
    }

    resetBio(ev: Event) {
      this.input = ""
      this.charCount = this.input.length
      
    }
}
