import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'activate-account/:code', component: SetPasswordComponent },
  { path: 'reset-password/:code', component: SetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
