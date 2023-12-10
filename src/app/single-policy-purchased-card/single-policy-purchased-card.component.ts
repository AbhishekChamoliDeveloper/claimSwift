import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-policy-purchased-card',
  templateUrl: './single-policy-purchased-card.component.html',
})
export class SinglePolicyPurchasedCardComponent {
  @Input() policy: any;
}
