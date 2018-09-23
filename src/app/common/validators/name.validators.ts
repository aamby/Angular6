import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NameValidators{
    static cannotStartWithNumber(control:AbstractControl): ValidationErrors | null{
        if(parseInt((control.value as string).charAt(0)))
            return {cannotStartWithNumber: true};
        return null;
    }
}