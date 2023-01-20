import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginData } from '../models/login-data';

@Injectable()
export class AuthService {

  private _loginUrl = 'http://localhost:3000/api/login';

  loggedInSource = new Subject<boolean>();
  loggedInObservable = this.loggedInSource.asObservable();
  isAdminSource = new Subject<boolean>();
  isAdminObservable = this.isAdminSource.asObservable();
  isAdmin = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  loginUser(user: User) {
    return this.httpClient.post<any>(this._loginUrl, user).subscribe({
      next:(ret: LoginData)=>{
        localStorage.setItem('token', ret.token);
        this.loggedInSource.next(true);
        this.isAdmin = ret.admin;
        this.publishIsAdmin();
        return true;
      },
      error: () => {
        this.loggedInSource.next(false);
        return false;
      }
    });
  }

  logoutUser() {
    localStorage.clear();
    this.loggedInSource.next(false);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return localStorage.getItem('token') != null;
  }

  publishIsAdmin() {
    this.isAdminSource.next(this.isAdmin);
  }
}
