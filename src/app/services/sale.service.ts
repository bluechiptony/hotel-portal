import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from 'hotel-lib';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  constructor() {}

  getSales = (): Observable<Sale[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(sales);
    });

    return ogs;
  };
}

export const sales: Sale[] = [];
