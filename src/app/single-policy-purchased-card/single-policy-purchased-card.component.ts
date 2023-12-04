import { Component, Input } from '@angular/core';

import { HealthInsurancePolicy } from '../../interfaces/health-insurance-policy.interface';

@Component({
  selector: 'app-single-policy-purchased-card',
  templateUrl: './single-policy-purchased-card.component.html',
})
export class SinglePolicyPurchasedCardComponent {
  @Input() policy: HealthInsurancePolicy;
}
