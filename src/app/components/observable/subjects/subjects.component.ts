import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  behavioral = [];
  replay = [];
  async = [];

  behavioralSub: BehaviorSubject<any> = new BehaviorSubject(0);
  replaySub: ReplaySubject<any> = new ReplaySubject(0);
  asyncSub: AsyncSubject<any> = new AsyncSubject();

  count = 0;
  constructor() { }

  ngOnInit() {
    this.behavioralSub.subscribe(data => {
      this.behavioral.push(data);
    });
    this.replaySub.subscribe(data => {
      this.replay.push(data);
    });
    this.asyncSub.subscribe(data => {
      this.async.push(data);
    });
  }


  next() {
    this.count++;
    this.behavioralSub.next(this.count);
    this.replaySub.next(this.count);
    this.asyncSub.next(this.count);
  }

  complete() {
    this.behavioralSub.complete();
    this.replaySub.complete();
    this.asyncSub.complete();
  }

  clear() {
    this.behavioral = [];
    this.replay = [];
    this.async = [];
  }
}
