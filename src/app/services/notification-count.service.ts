// notification-count.service.ts

import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service.ts.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationCountService {
  private pollInterval = 5000;

  constructor(private userService: UserService) {}

  getNotificationCount(): Observable<number> {
    return new Observable((observer) => {
      const poll = () => {
        this.userService.getUser().subscribe(
          (user) => {
            const unreadNotifications =
              user?.notifications.filter(
                (notification) => !notification.isRead
              ) || [];
            const notificationCount = unreadNotifications.length;
            observer.next(notificationCount);
            setTimeout(poll, this.pollInterval);
          },
          (error) => {
            console.error('Error fetching notification count:', error);
            observer.error(error);
            setTimeout(poll, this.pollInterval);
          }
        );
      };

      poll();
    });
  }
}
