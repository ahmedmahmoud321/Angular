import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBindingBetterHover]'
})
export class BindingBetterHoverDirective implements OnInit {


  @Input() bgColor: string = ''
  @Input('appBindingBetterHover') hoverColor: string = ''

  //  used to override and git a reference to background color of element the directive is applied to
  @HostBinding('style.backgroundColor') backgroundColor: string = this.bgColor


  ngOnInit(): void {
    //  this will get the value from the html unless it is will not work
    this.backgroundColor = this.bgColor;
  }

  @HostListener('mouseover') mouseOver() {
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseout') mouseOut() {
    this.backgroundColor = this.bgColor;
  }

}
