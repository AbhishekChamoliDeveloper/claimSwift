import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
})
export class UserSidebarComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl('/');
  }
}
