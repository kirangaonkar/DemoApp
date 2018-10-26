import { Directive, Renderer2, ElementRef, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterBetterHighlight]'
})
export class BetterBetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bacgroundColor;
  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    // this.bacgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    //this.bacgroundColor = 'blue';
  }
}
