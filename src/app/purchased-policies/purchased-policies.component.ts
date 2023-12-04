import { Component } from '@angular/core';

import { HealthInsurancePolicy } from '../../interfaces/health-insurance-policy.interface';

@Component({
  selector: 'app-purchased-policies',
  templateUrl: './purchased-policies.component.html',
})
export class PurchasedPoliciesComponent {
  healthInsuranceData: HealthInsurancePolicy[] = [
    {
      policy_number: 'HIP002',
      coverage_type: 'Family',
      deductible: '$1,500',
      image:
        'https://thumbs.dreamstime.com/b/happy-family-mother-father-children-son-daughter-sunset-nature-150794881.jpg',
      premium: '$250',
      information:
        'Comprehensive health coverage for families. This policy includes family doctor visits, maternity care, and child immunizations.',
      benefits: [
        'Family doctor visits',
        'Maternity care',
        'Child immunizations',
      ],
    },
    {
      policy_number: 'HIP001',
      coverage_type: 'Individual',
      deductible: '$1,000',
      image:
        'https://media.istockphoto.com/id/1405265698/photo/portrait-of-mid-adult-man-outdoors.webp?b=1&s=170667a&w=0&k=20&c=x6gzntsYtfbet9ZTpJaAw25r2POL7J4e_WGxLXJNT7E=',
      premium: '$150',
      information:
        'Comprehensive health coverage for individuals. This policy provides coverage for hospitalization, prescription drugs, and preventive care.',
      benefits: [
        'Hospitalization coverage',
        'Prescription drug coverage',
        'Preventive care',
      ],
    },
  ];
}
