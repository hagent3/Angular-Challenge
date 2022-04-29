import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createSearchPatternValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if(!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const specialCharacters = /[ÄÖÜß]+/.test(value);

    const whiteSpace = /^\S*$/.test(value);

    const searchValid = hasUpperCase && hasLowerCase && hasNumeric && specialCharacters && whiteSpace;

    return !searchValid ? {isSearchingValid:true}: null;
  }
}
