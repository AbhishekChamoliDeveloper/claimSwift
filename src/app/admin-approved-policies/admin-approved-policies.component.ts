import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-approved-policies',
  templateUrl: './admin-approved-policies.component.html',
})
export class AdminApprovedPoliciesComponent implements OnInit {
  approvedPolicies: any[] = [];

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit(): void {
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http
      .get<any>('http://localhost:3000/admin/claims/approved', { headers })
      .subscribe((data) => {
        this.approvedPolicies = data.policies;
      });
  }

  formatDate(date) {
    return new Date(date).toLocaleString();
  }
}
