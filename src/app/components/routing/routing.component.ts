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
    this.loginService.getStatus().subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
      console.log("1st subscriber " + isLogged);
    },

      error => {

      });

    this.loginService.getStatus().toPromise()
      .then((isLogged: boolean) => {
        console.log("2nd subscriber " + isLogged);
      });
    let promises = [this.loginService.getStatus().toPromise(), this.loginService.getStatus().toPromise()];
    Promise.all(promises).then((data) => {

    });
    /* this.loginService.getStatus().subscribe((isLogged: boolean) => {
      console.log("3rd subscriber " + isLogged);
    });
    this.loginService.getStatus().subscribe((isLogged: boolean) => {
      console.log("4th subscriber " + isLogged);
    }); */
  }

}
