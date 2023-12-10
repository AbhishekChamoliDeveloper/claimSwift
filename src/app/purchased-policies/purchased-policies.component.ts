import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-purchased-policies',
  templateUrl: './purchased-policies.component.html',
})
export class PurchasedPoliciesComponent implements OnInit {
  healthInsuranceData: any[] = [];

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.getPurchasedPolicies();
  }

  getPurchasedPolicies(): void {
    const authToken = this.cookieService.get('authToken');
    const apiUrl = 'http://localhost:3000/user/bought-policies';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http.get(apiUrl, { headers }).subscribe(
      (response: any) => {
        this.healthInsuranceData = response.boughtPolicies;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
