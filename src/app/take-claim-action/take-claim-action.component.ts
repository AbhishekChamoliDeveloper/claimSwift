import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-take-claim-action',
  templateUrl: './take-claim-action.component.html',
})
export class TakeClaimActionComponent implements OnInit {
  showRejectPopup = false;
  rejectionReason = '';
  claim;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    const claimId = this.route.snapshot.paramMap.get('claimId');
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http
      .get(`http://localhost:3000/admin/claim/${claimId}`, { headers })
      .subscribe(
        (response: any) => {
          this.claim = response.claim;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  rejectClaim(claimId) {
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http
      .patch(
        `http://localhost:3000/admin/reject-claim/${claimId}`,
        { rejectReason: this.rejectionReason },
        {
          headers,
        }
      )
      .subscribe(
        (response: any) => {
          this.toastService.success(`Your Rejected Claim Id ${claimId}.`);
          this.router.navigate(['/dashboard/admin/claim-review']);
        },
        (error) => {
          console.log(error);
          this.toastService.error(
            `Error happened when rejecting Claim Id ${claimId}.`
          );
        }
      );

    this.showRejectPopup = false;
  }

  approveClaim(claimId) {
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http
      .patch(
        `http://localhost:3000/admin/approve-claim/${claimId}`,
        {},
        {
          headers,
        }
      )
      .subscribe(
        (response: any) => {
          this.toastService.success(`Your Approved Claim Id ${claimId}.`);
          this.router.navigate(['/dashboard/admin/claim-review']);
        },
        (error) => {
          console.log(error);
          this.toastService.error(
            `Error happened when approving Claim Id ${claimId}.`
          );
        }
      );
  }

  formatDate(date) {
    return new Date(date).toLocaleString();
  }
}
