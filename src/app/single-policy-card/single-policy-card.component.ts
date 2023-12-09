import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-policy-card',
  templateUrl: './single-policy-card.component.html',
})
export class SinglePolicyCardComponent {
  @Input() policy: any;
}
