import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Validator } from "@angular/forms";

@Injectable({ providedIn: "root"})
export class Passwordmatch implements Validator {
    validate(formGroup: FormGroup){
        const { password , passwordConfirmation} = formGroup.value;
        if(password === passwordConfirmation ){
            return null;
        }else {
            return { passwordDontmatch : true};
        }
    }

}
