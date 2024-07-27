import {AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ViewChildComponent} from "../view-child/view-child.component";
import {catchError, map, Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements AfterContentInit, OnInit {

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

  templateReferenceVariable = '';


  //  will use it to display some data in the ui
  @ViewChild(ViewChildComponent) childComponent!: ViewChildComponent;

  @ContentChild('projectedContent') theContentChild?: ElementRef;

  ngAfterContentInit() {
    console.log(this.theContentChild?.nativeElement.textContent);
  }


  // Observable
  myObservable = new Observable((observer) => {
    observer.next('Hello World');
    // observer.error(new Error('Error'));
    observer.next('Hello Angular');
    observer.complete();
  });



  ngOnInit(): void {
    this.myObservable.subscribe(
      {
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          alert(err);
        },
        complete: () => {
          console.log('For Example Disappear Loader');
        }
      }
    )

    of('Hello World',2).pipe(

      map(data => { throw new Error('Error ' + data) })

    ).pipe(

      catchError(err => of('Error Handled' + err))

    ).subscribe(

      {
        next: (data) => {console.log(data);}
      }

    )
  };


  logContent() {
    console.log(this.theContentChild?.nativeElement.textContent);
  }


  templateReferenceVariableFunction(templateReferenceVariable
                                      :
                                      HTMLInputElement
  ) {
    alert(templateReferenceVariable.value);
    console.log(templateReferenceVariable.value);
  }

  alertViewChildData() {
    alert(this.childComponent.viewChildInput);
  }


  doExampleFunction() {
    // console.log('Example function');
    return 'Example function';
  }

  onWrite(event
            :
            any
  ) {
    console.log(event.target.value)
    this.theText = event.target.value;
  }


  onMouseOver() {
    console.log('Mouse over');
  }


}
