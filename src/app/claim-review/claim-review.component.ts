import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-claim-review',
  templateUrl: './claim-review.component.html',
})
export class ClaimReviewComponent implements OnInit {
  submittedPolicies = [];

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit() {
    this.fetchPendingClaims();
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

  formatDate(date) {
    return new Date(date).toLocaleString();
  }
}
