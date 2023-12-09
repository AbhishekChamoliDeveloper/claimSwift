import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-policy-purchase',
  templateUrl: './policy-purchase.component.html',
})
export class PolicyPurchaseComponent implements OnInit {
  selectedPolicy: any;
  formData: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

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
    this.formData.policyId = this.route.snapshot.paramMap.get('policyId');

    console.log(this.formData);
  }
}
