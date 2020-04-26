import {
    FormControl,
    FormGroup,
    AbstractControl
  } from '@angular/forms';

export function noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { noWhitespaceValidator: true };
}

export function passwordMatchValidator(control: AbstractControl) {
    const password = control.get('newPassword');
    const confirmPassword = control.get('confirmNewPassword');

    return password.value !== '' && confirmPassword.value !== '' && password.value !== confirmPassword.value
        ? { passwordmatchfailed: true }
        : null;
}

export function blankSpaceInputNotValid(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
        control.setValue('');
    }
    return null;
}