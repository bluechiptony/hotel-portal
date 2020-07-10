import { Injectable } from '@angular/core';
import { LoginRequest, PasswordCreationRequest } from 'bluechip-b54';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public BASE_URL = environment.baseUrl;
  constructor(private http: HttpClient) {}

  makeLoginAttenpt = (loginRequest: LoginRequest): Observable<string> => {
    return this.http.post<string>(
      `${this.BASE_URL}/authentication/login`,
      loginRequest
    );
  };

  makePasswordResetRequest = (emailAddress: string): Observable<string> => {
    return this.http.post<string>(
      `${this.BASE_URL}/authentication/forgot-password`,
      { emailAddress: emailAddress }
    );
  };

  setPasswordRequest = (
    changeRequest: PasswordCreationRequest
  ): Observable<string> => {
    return this.http.post<string>(
      `${this.BASE_URL}/authentication/reset-password`,
      changeRequest
    );
  };
  activateAccount = (
    changeRequest: PasswordCreationRequest
  ): Observable<string> => {
    return this.http.post<string>(
      `${this.BASE_URL}/authentication/activate-account`,
      changeRequest
    );
  };
}
