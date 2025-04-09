import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Registerform } from './form.type';

@Component({
  selector: 'app-review-form',
  standalone: false,
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {
  registerForm: FormGroup<Registerform> = new FormGroup<Registerform>({
    fullName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    Email: new FormControl(null, Validators.required),
    Number: new FormControl(null, [Validators.required]),
    Product: new FormControl('', Validators.required),
    Review: new FormGroup({
      Score: new FormControl(),
      Liked: new FormControl(),
    }),
    termsAndConds: new FormControl(null, Validators.requiredTrue)
  })

  buttons = Array(10).fill(0);
  selectedScore: number | null = null;
  setScore(score: number) {
    this.selectedScore = score;
    this.registerForm.controls.Review.controls.Score.setValue(score);
  }


  stars = Array(5).fill(0);

  product: string | null = null;
  liked: string | null = null;
  

  constructor(){

  }


  FormVisible = true
  updated = false;

  viewReview = false;

  
  upload(){
    console.log(this.registerForm)

    if(this.registerForm.valid){
      this.updated = true;
      this.product = this.registerForm.controls.Product.value
      this.liked = this.registerForm.controls.Review.controls.Liked.value
      this.registerForm.reset();
      this.FormVisible = false
    }else{
      this.registerForm.markAllAsTouched();
      // console.error(this.registerForm)
    }
  }

}
