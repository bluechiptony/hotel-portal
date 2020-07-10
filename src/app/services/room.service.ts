import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RoomCategory } from 'hotel-lib';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor() {}

  getRooms = () => {
    var ogs = Observable.create((observer) => {
      observer.next(roomCategopries);
    });

    return ogs;
  };
}

const roomCategopries: RoomCategory[] = [
  {
    categoryName: 'Deluxe',
    categoryPrice: 43444,
    categoryCode: 'CDE',
  },
  {
    categoryName: 'Presidential',
    categoryPrice: 55444,
    categoryCode: 'CPR',
  },
  {
    categoryName: 'Standard',
    categoryPrice: 23444,
    categoryCode: 'CST',
  },
];
