import { Component } from '@angular/core';

interface HealthPolicy {
  policyName: string;
  policyNumber: string;
  claimSubmissionDate: Date;
  approvedDate: Date;
  fullName: string;
  userId: string;
}

@Component({
  selector: 'app-admin-approved-policies',
  templateUrl: './admin-approved-policies.component.html',
})
export class AdminApprovedPoliciesComponent {
  approvedPolicies: HealthPolicy[] = [
    {
      policyName: 'Individual',
      policyNumber: 'HP123',
      claimSubmissionDate: new Date('2023-01-05'),
      approvedDate: new Date('2023-01-20'),
      fullName: 'Alice Johnson',
      userId: '456',
    },
    {
      policyName: 'Family',
      policyNumber: 'HP456',
      claimSubmissionDate: new Date('2023-02-10'),
      approvedDate: new Date('2023-02-25'),
      fullName: 'Bob Smith',
      userId: '789',
    },
  ];
}
