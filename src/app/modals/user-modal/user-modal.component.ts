import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationProfile, User } from 'hotel-lib';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/services/user.service';

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
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private appService: AppService,
    private userService: UserService
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
      this.createUser(user);
    } else {
    }
  };

  close = (): void => {
    this.dialogRef.close(false);
  };

  createUser = (user: User) => {
    this.loading = true;
    this.userService.createUserAccount(user).subscribe(
      (data: any) => {
        console.log(data);

        this.loading = false;
        this.appService.showSuccess(data.message);
        if (data.hasOwnProperty('userCode')) {
          let profile: AuthenticationProfile = {
            emailAddress: user.emailAddress,
            accountType: user.accountType,
            userCode: data.userCode,
            active: false,
          };
          this.createAuthenticationProfile(profile);
        }
      },
      (error) => {
        this.loading = false;
        this.appService.processError(error);
      }
    );
  };

  createAuthenticationProfile = (profile: AuthenticationProfile) => {
    this.loading = true;
    this.authenticationService.createAuthenticationProfile(profile).subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;
        this.appService.showSuccess(data.message);
      },
      (error) => {
        this.loading = false;
        this.appService.processError(error);
      }
    );
  };

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
