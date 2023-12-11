import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent {
  submittedPolicies = [];
  claimedPolicies = [];
  approvedPolicies = [];
  rejectedPolicies = [];
  users = [];

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit() {
    this.fetchPendingClaims();
    this.allClaimedPolicies();
    this.allApprovedPolicies();
    this.allRejectPolicies();
    this.allUserPolicies();
  }

  fetchPendingClaims() {
    const apiUrl = 'http://localhost:3000/admin/pending-claims';
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http.get(apiUrl, { headers }).subscribe(
      (response: any) => {
        this.submittedPolicies = response.pendingClaims;
      },
      (error) => {
        console.error('Error fetching pending claims:', error);
      }
    );
  }

  allClaimedPolicies() {
    const apiUrl = 'http://localhost:3000/admin/claimed-policies';
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http.get(apiUrl, { headers }).subscribe(
      (response: any) => {
        this.claimedPolicies = response.policies;
      },
      (error) => {
        console.error('Error fetching pending claims:', error);
      }
    );
  }

  allApprovedPolicies() {
    const apiUrl = 'http://localhost:3000/admin/claims/approved';
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http.get(apiUrl, { headers }).subscribe(
      (response: any) => {
        this.approvedPolicies = response.policies;
      },
      (error) => {
        console.error('Error fetching pending claims:', error);
      }
    );
  }

  allRejectPolicies() {
    const apiUrl = 'http://localhost:3000/admin/claims/rejected';
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http.get(apiUrl, { headers }).subscribe(
      (response: any) => {
        this.rejectedPolicies = response.policies;
      },
      (error) => {
        console.error('Error fetching pending claims:', error);
      }
    );
  }

  allUserPolicies() {
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
