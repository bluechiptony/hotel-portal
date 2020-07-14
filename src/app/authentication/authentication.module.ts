import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { FormDependencyModule } from '../shared/form-dependency/form-dependency.module';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AuthenticationComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormDependencyModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
