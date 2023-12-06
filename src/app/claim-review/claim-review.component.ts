import { Component } from '@angular/core';

@Component({
  selector: 'app-claim-review',
  templateUrl: './claim-review.component.html',
})
export class ClaimReviewComponent {
  submittedPolicies = [
    {
      policyName: 'Health Insurance',
      policyNumber: 'HI123456',
      submissionDate: new Date('2023-01-15'),
      fullName: 'John Doe',
      userId: '12345',
    },
    {
      policyName: 'Family Insurance',
      policyNumber: 'AI789012',
      submissionDate: new Date('2023-02-22'),
      fullName: 'Jane Smith',
      userId: '67890',
    },
  ];
}
