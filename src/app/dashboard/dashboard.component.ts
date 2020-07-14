import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, AuthenticationState } from 'hotel-lib';
import { Store } from '@ngrx/store';
import * as AuthActions from '../state-management/actions/authentication.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  adminContext: string = '';
  authState: any = {
    loggedIn: true,
  };
  drawerOpen: boolean = true;
  authSubScription: Subscription;
  contextSubScription: Subscription;
  loggedInUser: User;

  constructor(
    private router: Router,
    private authStore: Store<AuthenticationState>
  ) {}

  ngOnInit() {
    this.createSubscriptions();
  }

  ngOnDestroy() {
    if (this.authSubScription) {
      this.authSubScription.unsubscribe();
    }
    // if (this.contextSubScription) {
    //   this.authSubScription.unsubscribe();
    // }
  }

  toggleDrawer = (): void => {
    this.drawerOpen = !this.drawerOpen;
  };

  changeOpenstate(evt: any) {}

  logOut() {
    this.authStore.dispatch({ type: AuthActions.LOGOUT_USER });
    this.router.navigate(['']);
  }

  createSubscriptions = (): void => {
    this.authSubScription = this.authStore
      .select<any>('authenticationReducer')
      .subscribe((data: AuthenticationState) => {
        if (data == undefined) {
          this.router.navigate(['']);
        } else {
          this.loggedInUser = data.user;
          this.authState = data;
        }
      });
    // this.contextSubScription = this.adminContextStore
    //   .select<any>('adminContextReducer')
    //   .subscribe((data: AdminContext) => {
    //     this.adminContext = data.context;
    //   });
  };

  changeContext = (context: string) => {
    // this.adminContextStore.dispatch({
    //   type: AdminContextActions.SET_ADMIN_CONTEXT,
    //   adminContext: context,
    // });
  };
}
