import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    Product: new FormControl('', Validators.required),
    Liked: new FormControl(null, Validators.required),
    NotLiked: new FormControl(null, Validators.required),
    termsAndConds: new FormControl(null, Validators.requiredTrue)
  })

  product: string | null = null;
  liked: string | null = null;
  notLiked: string | null = null;

  constructor(){

  }


  
  updated = false;

  viewReview = false;

  
  upload(){
    console.log(this.registerForm)

    if(this.registerForm.valid){
      this.updated = true;
      this.product = this.registerForm.controls.Product.value
      this.liked = this.registerForm.controls.Liked.value
      this.notLiked = this.registerForm.controls.NotLiked.value
      this.registerForm.reset();
    }else{
      this.registerForm.markAllAsTouched();
      // console.error(this.registerForm)
    }
  }
}
