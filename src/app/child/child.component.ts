import {Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('projectedContent') content?: ElementRef;



  ngAfterContentInit() {
    console.log(this.content);
  }

  logContent() {
    console.log(this.content?.nativeElement.textContent);
  }

}
