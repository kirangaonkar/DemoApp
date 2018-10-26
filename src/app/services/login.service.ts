import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { share } from "rxjs/operators";
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;

  loginObserver;
  statusSubject = new Subject();
  //#observable
  loggedStatusObservable;

  constructor() {
    //#observable
    let loggedStatusObservable = Observable.create((observer) => {
      console.log("Observable");
      this.loginObserver = observer;
      observer.next(true);
    });
    // this.loggedStatusObservable = loggedStatusObservable;
    this.loggedStatusObservable = loggedStatusObservable.pipe(share());
  }
  getStatus(): Observable<any> {
    return this.statusSubject.asObservable();
  }

  login() {
    this.isLogged = true;
    this.statusSubject.next(true);
  }
  logout() {
    this.isLogged = false;
    this.statusSubject.next(false);
    // this.statusSubject.complete();
  }

  getLoggedInStatus() {
    return this.isLogged;
  }

}
