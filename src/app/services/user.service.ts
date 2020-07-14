import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'hotel-lib';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  authSubscription: Subscription;
  public BASE_URL = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getUsers = () => {
    return this.http.get(`${this.BASE_URL}/users/get`);
  };
  getSingleUser = (userId: string) => {
    return this.http.get(`${this.BASE_URL}/users/get/${userId}`);
  };

  getUsersAndAccounts = () => {
    return this.http.get(`${this.BASE_URL}/users/get`);
  };

  createUserAccount = (user: User) => {
    return this.http.post(`${this.BASE_URL}/users/create`, user);
  };
}
