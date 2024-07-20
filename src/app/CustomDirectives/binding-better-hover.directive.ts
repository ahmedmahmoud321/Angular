import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';


interface HoverColors {
  bgColor: string;
  hoverColor: string;
}


@Directive({
  selector: '[appBindingBetterHover]'
})
export class BindingBetterHoverDirective implements OnInit {

  private colors: HoverColors = { bgColor: '', hoverColor: '' };






  @Input('appBindingBetterHover')
  set appBindingBetterHover(value: HoverColors) {
    this.colors = value;
    this.backgroundColor = this.colors.bgColor;
  }




  //  used to override and git a reference to background color of element the directive is applied to
  @HostBinding('style.backgroundColor') backgroundColor: string = this.colors.bgColor


  ngOnInit(): void {
    //  this will get the value from the html unless it is will not work
    this.backgroundColor = this.colors.bgColor;
  }

  @HostListener('mouseover') mouseOver() {
    this.backgroundColor = this.colors.hoverColor;
  }

  @HostListener('mouseout') mouseOut() {
    this.backgroundColor = this.colors.bgColor;
  }

}
