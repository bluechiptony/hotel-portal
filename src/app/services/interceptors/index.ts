import { HotelInterceptor } from './HotelInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const AuthorizationIterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HotelInterceptor, multi: true },
];
