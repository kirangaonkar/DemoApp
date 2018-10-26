import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  dataList = [];
  observable;
  subscription;
  isLogged;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getStatus().subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
      console.log("1st subscriber " + isLogged);
    });
    // general structure
    this.createObservable('creating');
    this.subscribeCall();
  }


  subscribeCall() {
    let obs1 = {
      next: (data) => {
        this.dataList.push(data);
      },
      error: (error) => {
        this.dataList.push(error);
      },
      complete: () => {
        this.dataList.push("Complete");
      }
    };
    let obs2 = {
      next: (data) => {
        this.dataList.push(data);
      }
    };
    this.subscription = this.observable.subscribe(obs1);
    /* setTimeout(() => {
      this.subscription.add(this.observable.subscribe(obs2));
    }, 2000); */

  }

  createObservable(message) {
    this.observable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
      // alert(message);
    });
  }

  clear() {
    this.dataList = [];
    this.unsubscribe();
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}
