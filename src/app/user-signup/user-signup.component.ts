// user-signup.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
})
export class UserSignupComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  passwordVisible = false;

  onSubmit() {
    console.log('Form submitted', this.user);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
