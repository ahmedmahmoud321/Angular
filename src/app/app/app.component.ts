import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  imageUrl = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  displayImage = false;
  theText = "";


  doExampleFunction() {
    // console.log('Example function');
    return 'Example function';
  }

  onWrite(event:any) {
    console.log(event.target.value)
    this.theText = event.target.value;
  }



  onMouseOver() {
    console.log('Mouse over');
  }
}
