import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-rejected-policies',
  templateUrl: './admin-rejected-policies.component.html',
})
export class AdminRejectedPoliciesComponent {
  rejectedPolicies = [];

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit(): void {
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http
      .get<any>('http://localhost:3000/admin/claims/rejected', { headers })
      .subscribe((data) => {
        this.rejectedPolicies = data.policies;
      });
  }

  formatDate(date) {
    return new Date(date).toLocaleString();
  }
}
