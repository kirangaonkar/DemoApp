import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss']
})
export class OnChangeComponent implements OnChanges, OnInit {
  @Input() n = 8;
  constructor(
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    alert("Popping up on changes");
  }
  ngOnInit() {
    alert("Popping up on init of changes component");
  }

  navigateToDashboard(number) {
    this.router.navigate(['/dashboard', number], { queryParams: { dashboard: 10 } });
  }

}
