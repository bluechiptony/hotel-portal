import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  userForm: FormGroup;
  loading: boolean;
  accountTypes: string[] = ['ADMINISTRATOR', 'SALES'];
  submitted: boolean;
  constructor(
    private dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm = (user?: any) => {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      accountType: ['', Validators.required],
    });
  };

  submitForm = () => {
    this.submitted = true;
    if (this.userForm.valid) {
      let user = this.userForm.value;
      // this.createUser(user);
    } else {
    }
  };

  close = (): void => {
    this.dialogRef.close(false);
  };

  // createUser = (user: User) => {
  //   this.loading = true;
  //   this.authenticationService.createUserAccount(user).subscribe(
  //     (data: any) => {
  //       console.log(data);

  //       this.loading = false;
  //       this.authenticationService.showSuccess(data.message);
  //       if (data.hasOwnProperty('userCode')) {
  //         let profile: AuthenticationProfile = {
  //           emailAddress: user.emailAddress,
  //           accountType: user.accountType,
  //           userCode: data.userCode,
  //         };
  //         this.createAuthenticationProfile(profile);
  //       }
  //     },
  //     (error) => {
  //       this.loading = false;
  //       this.app.processError(error);
  //     }
  //   );
  // };

  // createAuthenticationProfile = (profile: AuthenticationProfile) => {
  //   this.loading = true;
  //   this.authenticationService.createAuthenticationProfile(profile).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       this.loading = false;
  //       this.authenticationService.showSuccess(data.message);
  //       if (data.hasOwnProperty('userCode')) {
  //         let assignment: AccountAssignment = {
  //           userCode: data.userCode,
  //           departmentCode: this.userForm.value.departmentCode,
  //           zonalCommandCode: this.userForm.value.zonalCommandCode,
  //         };
  //         this.assignToUnit(assignment);
  //       }
  //     },
  //     (error) => {
  //       this.loading = false;
  //       this.app.processError(error);
  //     }
  //   );
  // };

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get emailAddress() {
    return this.userForm.get('emailAddress');
  }
  get accountType() {
    return this.userForm.get('accountType');
  }
}
