import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CanComponentDeActivate } from './../../services/can-de-activate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, CanComponentDeActivate {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {

  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.loginService.isLogged) {
      return !this.loginService.isLogged;
    } else {
      return confirm("Hey do you want to navigate without logging out??");
    }
  }
}
