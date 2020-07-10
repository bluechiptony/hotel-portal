import { Injectable } from '@angular/core';
import { SaleItem } from 'hotel-lib';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor() {}

  getInventoryItems = (): Observable<SaleItem[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(inventoryItems);
    });

    return ogs;
  };
}

export const inventoryItems: SaleItem[] = [];
