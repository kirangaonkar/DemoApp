import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  isLogged = false;
  showStatus;
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.showStatus = this.route.snapshot.data['showStatus'];
    this.route.data.subscribe((d: Data) => {
      this.showStatus = d['showStatus'];
      console.log(d);
    });
    this.loginService.loggedStatusObservable.subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
      console.log("1st subscriber " + isLogged);
    });
    // this.loginService.loggedStatusObservable.subscribe((isLogged: boolean) => {
    //   console.log("2nd subscriber " + isLogged);
    // });
    // this.loginService.loggedStatusObservable.subscribe((isLogged: boolean) => {
    //   console.log("3rd subscriber " + isLogged);
    // });
    // this.loginService.loggedStatusObservable.subscribe((isLogged: boolean) => {
    //   console.log("4th subscriber " + isLogged);
    // });
  }

}
