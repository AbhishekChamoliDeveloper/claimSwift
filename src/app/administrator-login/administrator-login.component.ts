import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
})
export class AdministratorLoginComponent implements OnInit {
  admin = {
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

  ngOnInit() {}

  onSubmit() {
    this.isLoggingIn = true;
    this.httpClient
      .post('http://localhost:3000/admin/login', this.admin)
      .subscribe(
        (response: any) => {
          const authToken = response.token;
          this.cookieService.set('authToken', authToken);
          this.router.navigate(['/dashboard/admin']);
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
