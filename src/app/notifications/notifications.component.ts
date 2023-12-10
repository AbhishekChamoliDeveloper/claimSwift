import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.httpClient
      .get<any>('http://localhost:3000/user', { headers })
      .subscribe(
        (response) => {
          this.notifications = response.notifications.map((notification) => ({
            ...notification,
            createdAt: new Date(notification.createdAt).toLocaleString(),
          }));

          this.notifications.reverse();
        },
        (error) => {
          console.error('Error fetching notifications:', error);
        }
      );
  }
}
