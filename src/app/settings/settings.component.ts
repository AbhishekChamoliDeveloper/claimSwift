// settings.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../services/user.service.ts.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  formData = {
    profile_picture: '',
    dateOfBirth: '',
    mobileNumber: '',
    address: '',
    gender: 'male',
    firstName: '',
    lastName: '',
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user) => {
        this.formData.firstName = user.firstName;
        this.formData.lastName = user.lastName;
        this.formData.gender = user.gender;
        this.formData.address = user.address;
        this.formData.mobileNumber = user.mobileNumber;
        this.formData.dateOfBirth = user.dateOfBirth;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  uploadImage(event: any): void {
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
          this.formData.profile_picture = cloudinaryResponse.url;
        },
        (uploadError) => {
          console.error(uploadError);
        }
      );
    }
  }

  saveSettings() {
    const saveSettingsUrl = 'http://localhost:3000/user/settings';
    const authToken = this.cookieService.get('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http.post(saveSettingsUrl, this.formData, { headers }).subscribe(
      (response: any) => {
        const token = response?.token;
        if (token) {
          this.cookieService.set('authToken', token);
          this.toastr.success('Settings saved successfully', 'Success');
        }
      },
      (error) => {
        console.error('Error saving settings:', error);
        this.toastr.error('Error saving settings', 'Error');
      }
    );
  }
}
