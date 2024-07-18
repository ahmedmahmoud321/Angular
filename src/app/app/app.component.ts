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
  twoWayBindingText: string = "Two way binding text";
  items: string[] = ['item1', 'item2', 'item3', 'item4', 'item5'];
  products = [
    {id: 1, name: 'product1', price: 100, isAvailable: true},
    {id: 2, name: 'product2', price: 200, isAvailable: false},
    {id: 3, name: 'product3', price: 300, isAvailable: true},
  ]
  searchInputText = '';
  addBorderNGClass = false;



  doExampleFunction() {
    // console.log('Example function');
    return 'Example function';
  }

  onWrite(event: any) {
    console.log(event.target.value)
    this.theText = event.target.value;
  }


  onMouseOver() {
    console.log('Mouse over');
  }

}
