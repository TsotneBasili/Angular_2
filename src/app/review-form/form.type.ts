import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface Registerform {
    fullName: FormControl<string | null>,
    Email: FormControl<string | null>,
    Number: FormControl<string | null>,
    Product: FormControl<string | null>,
    Review: FormGroup<ReviewGroup>,
    termsAndConds: FormControl<boolean | null>
}

export interface ReviewGroup {
    Score: FormControl<number | null>,
    rating: FormControl<number | null>,
    Liked: FormControl<string | null>,
}