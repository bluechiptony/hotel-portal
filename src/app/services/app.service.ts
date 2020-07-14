import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private toast: ToastrService) {}

  public showError = (message: string) => {
    this.toast.error(message, 'Sorry something went wrong');
  };
  showSuccess = (message: string) => {
    this.toast.success(message, 'Process Successful');
  };
  showWarning = (message: string) => {
    this.toast.warning(message);
  };
  processError = (error): string => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.showError(error.error.message);
      return error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log('Erro processor');

      if (typeof error === 'string') {
        this.showError(error);
      } else if (typeof error.error === 'string') {
        this.showError(error.error);
      } else {
        this.showError(error.error.message);
      }
      return error.error.message;
    }
    // return an observable with a user-facing error message
    // return throwError("Something bad happened; please try again later.");
  };
}
