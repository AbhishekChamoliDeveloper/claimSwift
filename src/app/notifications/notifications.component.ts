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

    this.markAllNotificationsAsRead(authToken);

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

  private markAllNotificationsAsRead(authToken: string): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.httpClient
      .post<any>(
        'http://localhost:3000/user/mark-all-notifications-as-read',
        {},
        { headers }
      )
      .subscribe(
        (response) => {
          console.log('All notifications marked as read:', response);
        },
        (error) => {
          console.error('Error marking all notifications as read:', error);
        }
      );
  }
}
