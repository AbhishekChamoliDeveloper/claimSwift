import { Component } from '@angular/core';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
})
export class AdministratorLoginComponent {
  admin = {
    email: '',
    password: '',
  };

  passwordVisible = false;

  onSubmit() {
    console.log('Admin login submitted', this.admin);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
