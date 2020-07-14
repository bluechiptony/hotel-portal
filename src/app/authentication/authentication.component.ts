import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { LoginRequest, AuthenticationState, User } from 'hotel-lib';
import { AppService } from '../services/app.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as AuthActions from '../state-management/actions/authentication.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  authForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  authSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private appService: AppService,
    private authStore: Store<AuthenticationState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.makeAuthSubscription();
  }

  makeAuthSubscription = () => {
    this.authSub = this.authStore.select<any>('').subscribe((data) => {
      // console.log(data);
    });
  };
  /**
   * Build form
   */
  buildForm = (): void => {
    this.authForm = this.fb.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
    });
  };

  /**
   * Submit form
   */
  submitForm = (): void => {
    this.submitted = true;
    if (this.authForm.valid) {
      this.makeAuthRequest(this.authForm.value);
    } else {
    }
  };

  makeAuthRequest = (loginRequest: LoginRequest): void => {
    this.authService.makeLoginAttenpt(loginRequest).subscribe(
      (token: string) => {
        this.saveAuthUser(token);
      },
      (error) => {
        this.appService.processError(error);
      }
    );
  };

  saveAuthUser = (token?: string) => {
    let user: User = this.authService.getUserFromToken(token);
    this.authStore.dispatch({
      type: AuthActions.LOGIN_USER,
      user: user,
      token: token,
    });
    this.navigateToDashboard(user);
  };
  navigateToDashboard = (user: User) => {
    this.appService.showSuccess(
      'Login successful. Preparring your environment'
    );
    this.router.navigate(['/dashboard']);
  };

  get emailAddress() {
    return this.authForm.get('emailAddress');
  }
  get password() {
    return this.authForm.get('password');
  }
}
