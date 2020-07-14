import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordCreationRequest } from 'hotel-lib';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  authForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  action: string = 'Activate Account';
  isActivation: boolean;
  code: string;
  routeSubscription: Subscription;
  errorMessage: string;
  hasError: boolean;
  constructor(
    private fb: FormBuilder,
    private actioveRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private app: AppService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.checkRoute();
    this.buildForm();
  }

  checkRoute = () => {
    this.routeSubscription = this.actioveRoute.url.subscribe((params) => {
      this.code = params[1].path;
      if (params[0].path == 'reset-password') {
        this.action = 'Set Password';
      } else {
        this.action = 'Activate Account';
        this.isActivation = true;
      }
      console.log(this.isActivation);
    });
  };

  buildForm = () => {
    this.authForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  };

  submitForm = () => {
    this.hasError = false;
    this.submitted = true;
    if (this.authForm.valid) {
      if (
        this.checkPasswordStrings(
          this.authForm.value.password,
          this.authForm.value.confirmPassword
        )
      ) {
        this.makeSetPasswordRequest(
          {
            token: this.code,
            password: this.authForm.value.password,
          },
          this.isActivation
        );
      } else {
        this.authForm
          .get('confirmPassword')
          .setErrors({ unEqualPassword: 'Your passwords do not match' });
      }
    }
  };

  checkPasswordStrings = (pass: string, confirmPass: string): boolean => {
    return pass === confirmPass;
  };

  makeRecoveryRequest = (request: any) => {};

  makeSetPasswordRequest = (
    request: PasswordCreationRequest,
    isActivation: boolean
  ) => {
    this.loading = true;
    this.authService.setPassword(request, isActivation).subscribe(
      (data: any) => {
        this.loading = false;
        this.app.showSuccess(data.message);
        this.router.navigate(['/']);
      },
      (error) => {
        this.loading = false;
        console.log(error);

        this.errorMessage = this.app.processError(error);
        this.hasError = true;
      }
    );
  };

  get password() {
    return this.authForm.get('password');
  }
  get confirmPassword() {
    return this.authForm.get('confirmPassword');
  }
}
