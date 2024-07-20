import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHover]'
})
export class BetterHoverDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }


  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue'
  @HostBinding('style.color') textColor: string = 'black'

  @HostListener('mouseover') mouseOver() {
    this.backgroundColor = 'green';
    this.textColor = 'white';
  }

  @HostListener('mouseout') mouseOut() {
    this.backgroundColor = 'blue'
    this.textColor = 'black'
  }

}
