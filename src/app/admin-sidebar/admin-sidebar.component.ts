import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl('/admin-login');
  }
}
