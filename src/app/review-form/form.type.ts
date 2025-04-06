import { FormControl } from "@angular/forms";

export interface Registerform {
    fullName: FormControl<string | null>,
    Product: FormControl<string | null>,
    Liked: FormControl<string | null>,
    NotLiked: FormControl<string | null>,
    termsAndConds: FormControl<boolean | null>
}