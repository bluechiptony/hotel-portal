import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  authForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm = (): void => {
    this.authForm = this.fb.group({});
  };

  submitForm = (): void => {
    if (this.authForm.valid) {
    } else {
    }
  };
}
