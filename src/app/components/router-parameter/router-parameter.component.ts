import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-router-parameter',
  templateUrl: './router-parameter.component.html',
  styleUrls: ['./router-parameter.component.scss']
})
export class RouterParameterComponent implements OnInit {

  param;
  queryParams;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.route.snapshot.params['number'];
    this.route.params.subscribe((param: Params) => {
      this.param = param['number'];
    });

    this.queryParams = this.route.snapshot.queryParams;
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
    });
  }

}
