import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { authenticationReducer } from './state-management/reducers/authentication.reducer';
import { AuthorizationIterceptorProviders } from './services/interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot({
      tapToDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),
    StoreModule.forRoot({
      authenticationReducer: authenticationReducer,
    }),
  ],
  providers: [AuthorizationIterceptorProviders],

  bootstrap: [AppComponent],
})
export class AppModule {}
