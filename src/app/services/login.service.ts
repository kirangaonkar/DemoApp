import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { share } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;

  loginObserver;
  //#observable
  loggedStatusObservable;

  constructor() {
    //#observable
    let loggedStatusObservable = Observable.create((observer) => {
      console.log("Observable");
      this.loginObserver = observer;
    });
    this.loggedStatusObservable = loggedStatusObservable;
    //this.loggedStatusObservable = loggedStatusObservable.pipe(share());
  }

  login() {
    this.isLogged = true;
    this.loginObserver.next(true);
  }
  logout() {
    this.isLogged = false;
    this.loginObserver.next(false);
  }

  getLoggedInStatus() {
    return this.isLogged;
  }

}
