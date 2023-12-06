import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-rejected-policies',
  templateUrl: './admin-rejected-policies.component.html',
})
export class AdminRejectedPoliciesComponent {
  rejectedPolicies = [
    {
      policyName: 'Critical Illness Insurance',
      policyNumber: 'CI123456',
      claimSubmissionDate: '2023-01-10',
      rejectedDate: '2023-01-15',
      fullName: 'John Doe',
      userId: 'user123',
    },
    {
      policyName: 'Dental Insurance',
      policyNumber: 'DI789012',
      claimSubmissionDate: '2023-02-05',
      rejectedDate: '2023-02-12',
      fullName: 'Jane Smith',
      userId: 'user456',
    },
    {
      policyName: 'Vision Insurance',
      policyNumber: 'VI345678',
      claimSubmissionDate: '2023-03-20',
      rejectedDate: '2023-03-25',
      fullName: 'Bob Johnson',
      userId: 'user789',
    },
    // Add more sample data as needed
  ];

  formatDateString(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
