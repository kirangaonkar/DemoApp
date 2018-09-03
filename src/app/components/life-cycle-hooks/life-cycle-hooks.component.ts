import { Component, OnInit, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck } from '@angular/core';
import { OnChangeComponent } from './on-change/on-change.component';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
// tslint:disable-next-line:max-line-length
export class LifeCycleHooksComponent implements OnInit, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck {
  n = 8;
  value = 8;

  constructor() { }

  ngOnInit() {
    alert("This is On Init");
  }

  ngOnDestroy() {
    alert("This is On Destroy");
  }

  ngAfterContentChecked() {
    alert("This is After Content Checked");
  }

  ngAfterViewChecked() {
    alert("This is After View Checked");
  }

  ngAfterContentInit() {
    alert("This is After Content Init");
  }

  ngAfterViewInit() {
    alert("This is On AfterViewInit");
  }

  ngDoCheck() {
    alert("This is On Docheck");
  }


  add() {
    this.n += 1;
  }
}
