import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-claim-policy',
  templateUrl: './claim-policy.component.html',
})
export class ClaimPolicyComponent implements OnInit {
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

  uploadPhoto(event: any): void {
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
          this.formData.photoOrVideoLink = cloudinaryResponse.url;
        },
        (uploadError) => {
          console.error(uploadError);
        }
      );
    }
  }

  uploadSupportingDocument(event: any): void {
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
          this.formData.supportingDocument = cloudinaryResponse.url;
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
        `http://localhost:3000/user/claim-policy/${this.selectedPolicy._id}`,
        this.formData,
        { headers: headers }
      )
      .subscribe(
        (response: any) => {
          this.toastService.success(
            `Congratulation, You Policy Id ${this.selectedPolicy._id}. Your claim Id is ${response._id}.`
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
