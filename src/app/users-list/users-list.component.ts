import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent {
  users = [];

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit(): void {
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http
      .get<any>('http://localhost:3000/admin/users', { headers })
      .subscribe((data) => {
        this.users = data.allUsers;
      });
  }

  formatDate(date) {
    return new Date(date).toLocaleString();
  }
}
