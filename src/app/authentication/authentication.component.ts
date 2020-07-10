import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  authForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

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
    } else {
    }
  };

  get emailAddress() {
    return this.authForm.get('emailAddress');
  }
  get password() {
    return this.authForm.get('password');
  }
}
