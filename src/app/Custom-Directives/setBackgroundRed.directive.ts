import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  // here `[]`
  selector: '[setBackgroundRed]'
})
export class SetBackgroundRedDirective implements OnInit {
  private element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
    this.element.nativeElement.style.color = 'white';
  }

}
