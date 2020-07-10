import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  submitted: boolean;
  authForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm = (data?: any): void => {
    this.authForm = this.fb.group({
      emailAddress: ['', Validators.required],
    });
  };

  submitForm = (): void => {
    this.submitted = true;
    if (this.authForm.valid) {
    } else {
    }
  };

  get emailAddress() {
    return this.authForm.get('emailAddress');
  }
}
