import { Component } from '@angular/core';

@Component({
  selector: 'app-take-claim-action',
  templateUrl: './take-claim-action.component.html',
})
export class TakeClaimActionComponent {
  showRejectPopup = false;
  rejectionReason = '';

  rejectClaim() {
    console.log('Claim rejected with reason:', this.rejectionReason);

    this.showRejectPopup = false;
  }
}
