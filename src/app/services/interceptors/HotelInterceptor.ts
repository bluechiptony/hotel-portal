import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class HotelInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.authService.getLoggedInUserToken();
    const modifiedRequest = req.clone({
      headers: req.headers.set('Authorization', token),
    });

    return next.handle(modifiedRequest);
  }
}
