import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  passwordVisible = false;
  isLoggingIn = false;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit() {
    const authToken = this.cookieService.get('authToken');
    if (authToken) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    this.isLoggingIn = true;
    this.httpClient
      .post('http://localhost:3000/user/login', this.user)
      .subscribe(
        (response: any) => {
          const authToken = response.token;
          this.cookieService.set('authToken', authToken);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.isLoggingIn = false;
          alert('Invalid credentials. Please try again.');
        }
      );
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
