import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service.ts.service'; // Replace with the actual path
import { NotificationCountService } from '../services/notification-count.service'; // Replace with the actual path

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
})
export class UserSidebarComponent implements OnInit {
  userData: any;
  notificationCount: number = 0;

  constructor(
    private router: Router,
    private userService: UserService,
    private notificationCountService: NotificationCountService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data) => {
        this.userData = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );

    this.notificationCountService.getNotificationCount().subscribe(
      (count) => {
        this.notificationCount = count;
      },
      (error) => {
        console.error('Error fetching notification count:', error);
      }
    );
  }

  logout() {
    this.router.navigateByUrl('/');
  }
}
