import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'green';//.nativeElement.style.backgroundColor = 'green';
  }
}
