import { Directive, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterBetterBetterHighlight]'
})
export class BetterBetterBetterHighlightDirective implements OnInit {
  @Input('appBetterBetterBetterHighlight') defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') bacgroundColor;
  constructor() { }

  ngOnInit() {
    this.bacgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.bacgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.bacgroundColor = this.defaultColor;
  }

}
