// import { AuthenticationComponent } from './authentication.component';
// import { AuthenticationService } from '../services/authentication.service';
// import { of } from 'rxjs';

// describe('Authentication component tests', () => {
//   let component: AuthenticationComponent;
//   const fakeAuthService = {
//     BASE_URL: '',
//     activateAccount: () => {},
//     makeLoginAttempt: () => {},
//     makePasswordResetRequest: () => {},
//     setPasswordRequest: () => {},
//     http: {},
//   } as any;

//   const fakeAuthenticationService = jasmine.createSpyObj(
//     'AuthenticationService',
//     [
//       'activateAccount',
//       'makeLoginAttempt',
//       'makePasswordResetRequest',
//       'setPasswordRequest',
//     ]
//   );
//   const authenticationSrevice = new AuthenticationService(null);

//   beforeEach(() => {
//     component = new AuthenticationComponent(null, fakeAuthenticationService);
//     const loginSpy = spyOn(
//       authenticationSrevice,
//       'makeLoginAttenpt'
//     ).and.returnValue(of('Auth token'));
//   });

//   it('Should have ca ready component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('loaded and submitted should be false at start', () => {
//     expect(component.loading).toBeFalse();
//     expect(component.submitted).toBeFalse();
//   });
// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

describe('AuthenticationComponent', () => {
  let fb: FormBuilder;
  let authService: AuthenticationService;
  let component: AuthenticationComponent = new AuthenticationComponent(
    fb,
    null
  );
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      imports: [ReactiveFormsModule],
      providers: [AuthenticationService, { provide: HttpClient, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loaded and submitted should be false at start', () => {
    expect(component.loading).toBeFalse();
    expect(component.submitted).toBeFalse();
  });

  it('Should make login request on function call', () => {
    const loginSpyFromService = spyOn(
      authService,
      'makeLoginAttenpt'
    ).and.returnValue(of('Auth token'));
  });

  // it('Login form should build', () => {
  //   component.buildForm();
  //   // let authForm:FormGroup = component.buildForm()
  //   expect(component.authForm).toEqual(
  //     new FormGroup({
  //       emailAddress: new FormControl(['', Validators.required]),
  //       password: new FormControl(['', Validators.required]),
  //     })
  //   );
  // });
});
