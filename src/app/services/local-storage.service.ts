import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public static setSavedState = (state: any, key: string): any => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {}
  };

  public static getSavedState = (key: string) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {}
  };

  public static clearState = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {}
  };
}
