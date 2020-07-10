import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-settings',
  templateUrl: './room-settings.component.html',
  styleUrls: ['./room-settings.component.scss'],
})
export class RoomSettingsComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  buildForm = (): void => {
    this.settingsForm = this.fb.group({
      checkOutTime: ['', Validators.required],
    });
  };

  submitForm = (): void => {
    if (this.settingsForm.valid) {
    } else {
    }
  };

  get checkOutTime() {
    return this.settingsForm.get('checkOutTime');
  }
}
