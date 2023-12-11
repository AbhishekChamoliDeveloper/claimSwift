import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent {
  constructor(private router: Router, private cookieService: CookieService) {}

  logout() {
    this.cookieService.deleteAll('authToken');
    this.router.navigateByUrl('/admin-login');
  }
}
