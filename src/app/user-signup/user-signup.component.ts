import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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
  isSigningUp = false;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  onSubmit() {
    this.isSigningUp = true;
    this.httpClient
      .post('http://localhost:3000/user/signup', this.user)
      .subscribe(
        (response: any) => {
          const token = response.token;
          this.cookieService.set('authToken', token);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.isSigningUp = false;
          console.log(error.error);
          alert(error.message);
        }
      );
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
