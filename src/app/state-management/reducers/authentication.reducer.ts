import { AuthenticationState } from 'bluechip-b54';
import * as AuthenticationActions from '../actions/authentication.action';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

const initialAuthenticationState: AuthenticationState = {
  loggedIn: false,
};

export const authenticationReducer = (
  state: AuthenticationState = initialAuthenticationState,
  action: AuthenticationActions.Actions
): AuthenticationState => {
  switch (action.type) {
    case AuthenticationActions.LOGIN_USER:
      LocalStorageService.setSavedState(
        {
          ...state,
          loggedIn: true,
          user: action.user,
          token: action.token,
        },
        environment.authStateKey
      );

      return {
        ...state,
        loggedIn: true,
        user: action.user,
        token: action.token,
      };

    case AuthenticationActions.LOGOUT_USER:
      LocalStorageService.clearState(environment.authStateKey);
      return initialAuthenticationState;
    default:
      return (
        LocalStorageService.getSavedState(environment.authStateKey) || state
      );
  }
};

export const getLoggedInStatus = (state: AuthenticationState) => state.loggedIn;

export const getLoggedInUser = (state: AuthenticationState) => state.user;
