import { Component, Input } from '@angular/core';

import { HealthInsurancePolicy } from '../../interfaces/health-insurance-policy.interface';

@Component({
  selector: 'app-single-policy-card',
  templateUrl: './single-policy-card.component.html',
})
export class SinglePolicyCardComponent {
  @Input() policy: HealthInsurancePolicy;
}
