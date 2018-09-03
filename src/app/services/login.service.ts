import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;
  constructor() { }

  login() {
    this.isLogged = true;
  }
  logout() {
    this.isLogged = false;
  }

  getLoggedInStatus() {
    return this.isLogged;
  }
}
