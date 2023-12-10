import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-policy-purchase',
  templateUrl: './policy-purchase.component.html',
})
export class PolicyPurchaseComponent implements OnInit {
  selectedPolicy: any;
  formData: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    const policyId = this.route.snapshot.paramMap.get('policyId');

    this.http.get(`http://localhost:3000/policy/${policyId}`).subscribe(
      (response: any) => {
        this.selectedPolicy = response.policy;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  uploadDocument(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const cloudinaryUploadUrl =
        'https://api.cloudinary.com/v1_1/dmkpqiqea/raw/upload';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'vgrttoyr');
      formData.append('api_key', '319926924341192');

      this.http.post(cloudinaryUploadUrl, formData).subscribe(
        (cloudinaryResponse: any) => {
          console.log(cloudinaryResponse.url);
          this.formData.uploadedDocument = cloudinaryResponse.url;
        },
        (uploadError) => {
          console.error(uploadError);
        }
      );
    }
  }

  onSubmit(e: Event) {
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http
      .post(
        `http://localhost:3000/user/buy-policy/${this.selectedPolicy._id}`,
        this.formData,
        { headers: headers }
      )
      .subscribe(
        (response: any) => {
          this.toastService.success(
            `Congratulation, You bought policy number ${response.boughtPolicy.policyId}.`
          );
          this.router.navigate(['/dashboard/available-policies']);
        },
        (error) => {
          console.log(error);
          alert(error.error);
        }
      );
  }
}
