// user-login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent {
  user = { email: '', password: '' };
  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    console.log('Form submitted', this.user);
  }
}
