import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/form-dependency/form-dependency.module';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss'],
})
export class NewRoomComponent implements OnInit {
  appForm: FormGroup;
  editorConfig: AngularEditorConfig = editorConfig;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitForm = (): void => {
    if (this.appForm.valid) {
    } else {
    }
  };

  buildForm = (): void => {
    this.appForm = this.fb.group({
      roomDescription: [],
    });
  };
}
