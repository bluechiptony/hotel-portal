import { Action } from '@ngrx/store';
import { User, AccountType } from 'hotel-lib';

export const LOGIN_USER = '[LOGGEDINUSER] Login';
export const LOGOUT_USER = '[LOGGEDINUSER] Logout';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;

  constructor(
    public user: User,
    public accountType: AccountType,
    public token: string
  ) {}
}

export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;

  constructor() {}
}

export type Actions = LoginUser | LogoutUser;
