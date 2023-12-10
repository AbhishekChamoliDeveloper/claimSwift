import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user';
  private userData: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getUser(): Observable<any> {
    const authToken = this.cookieService.get('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }

  getUserData(): any {
    return this.userData;
  }
}
