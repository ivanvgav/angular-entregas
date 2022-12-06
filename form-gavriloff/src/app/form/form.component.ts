import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class RegisterPageComponent {
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  lastNameControl = new FormControl('', [Validators.required]);

  emailControl = new FormControl('', [Validators.email, Validators.required]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  repeatPasswordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  registerForm = new FormGroup(
    {
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      password: this.passwordControl,
      repeatPassword: this.repeatPasswordControl,
    },
    {
      validators: [this.passwordMatchValidator],
    }
  );

  passwordMatchValidator() {
    return () => {
      if (this.passwordControl.value !== this.repeatPasswordControl.value) {
        return { passwordsMatch: true };
      }
      return null;
    };
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
