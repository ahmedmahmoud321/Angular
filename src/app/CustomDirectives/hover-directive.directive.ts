import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective  {

  constructor(private element: ElementRef, private render: Renderer2) {
  }


  // inside the () of the @HostListener we specify the action this listener will do when happen
  @HostListener('mouseenter') onMouseOver() {
    this.render.setStyle(this.element.nativeElement, 'scale', '1.1')
    this.render.setStyle(this.element.nativeElement, 'border', '1px solid black')
    this.render.setStyle(this.element.nativeElement, 'transition', '1s')
  }

  @HostListener('mouseout') onMouseOut() {
    this.render.setStyle(this.element.nativeElement, 'scale', '1')
    this.render.setStyle(this.element.nativeElement, 'border', '0px solid black')
    this.render.setStyle(this.element.nativeElement, 'transition', '1s')
  }

}
