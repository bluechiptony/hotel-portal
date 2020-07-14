import { Injectable } from '@angular/core';
import {
  LoginRequest,
  PasswordCreationRequest,
  User,
  AuthenticationState,
} from 'hotel-lib';
import { Observable, Subscription } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authSubscription: Subscription;
  public BASE_URL = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private store: Store<AuthenticationState>
  ) {}

  /**
   * Decodes JWT token to any (Authenticated user)
   */
  decodeJWTToken = (token: string): any => {
    return jwtDecode(token);
  };

  getUserFromToken = (token: string): User => {
    try {
      let user: User = this.decodeJWTToken(token);
      return user;
    } catch (error) {
      throw new Error('Cannot decode invalid token');
    }
  };

  getLoggedInUserToken = (): string => {
    let token: string;
    let authState: AuthenticationState;
    this.authSubscription = this.store
      .select<any>('authenticationReducer')
      .subscribe((state) => {
        authState = state;
        token = authState.token;
      });

    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    return token;
  };

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

  setPassword = (request: PasswordCreationRequest, isActivation: boolean) => {
    // console.log(request);

    let url = `${this.BASE_URL}/authentication/activate-account`;
    if (!isActivation) {
      url = `${this.BASE_URL}/authentication/reset-password`;
    }

    return this.http.post<any>(url, request);
  };
  activateAccount = (
    changeRequest: PasswordCreationRequest
  ): Observable<string> => {
    return this.http.post<string>(
      `${this.BASE_URL}/authentication/activate-account`,
      changeRequest
    );
  };

  createAuthenticationProfile = (profile: any) => {
    return this.http.post(
      `${this.BASE_URL}/authentication/create/account`,
      profile
    );
  };

  createUserFromObject = (prospect: any): User => {
    let user: User = {
      firstName: prospect.firstName,
      lastName: prospect.lastName,
      emailAddress: prospect.emailAddress,
      accountType: prospect.accountType,
    };

    return user;
  };
}
