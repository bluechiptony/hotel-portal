import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  appForm: FormGroup;
  submitted: boolean;
  hasError: boolean;
  errorMessage: string;
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private app: AppService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm = () => {
    this.appForm = this.fb.group({
      emailAddress: ['', Validators.required],
    });
  };

  submitForm = () => {
    this.hasError = false;
    this.submitted = true;
    if (this.appForm.valid) {
      this.makeRecoveryRequest(this.appForm.value);
    }
  };

  makeRecoveryRequest = (request: any) => {
    this.loading = true;
    this.authService.makePasswordResetRequest(request).subscribe(
      (data: any) => {
        this.loading = false;
        console.log(data);
        this.app.showSuccess(data.message);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = this.app.processError(error);
        this.hasError = true;
      }
    );
  };

  get emailAddress() {
    return this.appForm.get('emailAddress');
  }
}
