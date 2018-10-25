import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CanComponentDeActivate } from './../../services/can-de-activate.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
    return confirm("Hey do you want to navigate??");
  }
}
