import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthModel } from '../models/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = environment.baseApiUrl;
  private token = "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a";

  constructor(private http: HttpClient) { }

  register(data: AuthModel): Observable<any> {
    const request = this.generateRequestModel(data);
    return this.http.post<any>(this.api + 'signup ', request);
  }

  isEmailRegistered(email: string): Observable<any> {
    const request = this.generateRequestModel({ email: email });
    return this.http.post<any>(this.api + 'check-user', request);
  }

  private generateRequestModel(data: any) {
    return {
      "campaignUuid": this.token,
      "data": data
    };
  }

}

