import { Component, OnInit } from '@angular/core';

import { HealthInsurancePolicy } from '../../interfaces/health-insurance-policy.interface';

@Component({
  selector: 'app-claim-policy',
  templateUrl: './claim-policy.component.html',
})
export class ClaimPolicyComponent implements OnInit {
  selectedPolicy: HealthInsurancePolicy;

  ngOnInit() {
    this.selectedPolicy = this.getSelectedPolicy();
  }

  getSelectedPolicy(): HealthInsurancePolicy {
    return {
      coverage_type: 'Individual',
      policy_number: 'HP01',
      image:
        'https://media.istockphoto.com/id/1405265698/photo/portrait-of-mid-adult-man-outdoors.webp?b=1&s=170667a&w=0&k=20&c=x6gzntsYtfbet9ZTpJaAw25r2POL7J4e_WGxLXJNT7E=',
      information: 'Comprehensive health coverage for individuals.',
      benefits: [
        'Hospitalization coverage',
        'Prescription drug coverage',
        'Preventive care',
      ],
      deductible: '$1,000',
      premium: '$150',
    };
  }
}
