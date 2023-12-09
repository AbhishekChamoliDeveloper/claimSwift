import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Policy {
  _id: string;
  policy_number: string;
  coverage_type: string;
  image: string;
  information: string;
  benefits: string[];
}

@Component({
  selector: 'app-user-available-policies',
  templateUrl: './user-available-policies.component.html',
})
export class UserAvailablePoliciesComponent implements OnInit {
  healthInsuranceData: Policy[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchPolicyData();
  }

  fetchPolicyData() {
    this.httpClient
      .get<{ policies: Policy[] }>('http://localhost:3000/policy')
      .subscribe(
        (data) => {
          this.healthInsuranceData = data.policies;
        },
        (error) => {
          console.error('Error fetching policy data:', error);
        }
      );
  }
}
