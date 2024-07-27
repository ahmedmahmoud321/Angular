# MyApp

Generate Angular Component

```shell
ng generate component home
```

Template component

```ts
@Component({
  // the html selector of this compoennt
  selector: 'app-home',
  // html template directory for the component
  templateUrl: './home.component.html',
  // style template directory for the component
  styleUrls: ['./home.component.css'],
  //   instead to refere to html file use direct html
  template: '<h1>Hello World!</h1>',
  //   instead to refere to css file use direct css
  styles: ['h1 { font-weight: normal; }', 'h2 {font-weight: 500}'],

})
export class HomeComponent {

}
```

- install bootstrap

```shell
npm install --save bootstrap
```

- add bootstrap to angular.json

```json
"styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```

### Types of selector

- Tag selector

```ts
@Component({
  // the html selector of this compoennt
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
```

Using tag selector

```html

<app-home></app-home>
```

- Attribute selector

```ts
@Component({
  // before the attribute selector we need to add a square bracket
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
```

User attribute selector

```html

<div app-home></div>
```

- Class selector

```ts
@Component({
  // before the class selector we need to add a dot
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
```

```html

<div class="app-home"></div>

```

Over all the selector can be used in the html in this ways.

```html

<app-home></app-home>
<div app-home></div>
<div class="app-home"></div>
```

### Data binding

1. using data binding we can pass data from the component to the html template
2. we can pass data from the html template to the component

#### One way data binding

**String Interpolation**

1. when can pass data from the component to the html template using the interpolation syntax `{{}}`

    ```ts
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css'],
    })
    export class HomeComponent {
      title = 'Home Component';
    }
    ```

    ```html
    <!--   Any TypeScript Code    --> 
    <h1>{{title}}</h1>
   <h2>{{1 + 1}}</h2>
   <h2>{{"Hello" + " " + "World"}}</h2>
   <h2>{{true ? 'Yes' : 'No'}}</h2>
   <h2> {{ doExampleFunction() }} </h2>
    ```

**Property Binding**

3. we can pass data from the component to the html template using the property binding syntax `[]`

    ```ts
   
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css'],
    })
    export class HomeComponent {
      title = 'Home Component';
      imageUrl = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    }
    ```

    ```html
    <img [src]="imageUrl" />
    ```

**Event Binding**

2. we can pass data from the html template to the component using the event binding syntax `()`

    ```ts
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css'],
    })
    export class HomeComponent {
      title = 'Home Component';
      textExample = '';
      onClick() {
        console.log('Button Clicked');
      }
      onInput(event: any) {
        console.log(event.target.value);
        this.textExample = event.target.value;  
      }
    }
    ```

    ```html
    <button (click)="onClick()">Click Me</button>
   <p [textContent]="textExample"></p>
   <input (input)="onInput($event)" />
    ```

### Two way data binding

bind data from the component to the html template and from the html template to the component

is a combination of property binding and event binding `[]' + '()` = `[(ngModel)]`

```ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Home Component';
  textExample = '';
}
```

```html
<input [(ngModel)]="textExample"/>
<p>{{textExample}}</p>
```

    to do this previously we needed to send the data to the component 
    using event binding then get the string from the event then assign it to
    variable then display with string interpolation

### Directives

Directives are instructions in the DOM that extend HTML capabilities by allowing you to create custom behaviors and manipulate the DOM.

1. Structural Directives
2. Attribute Directives
3. Built-in Directives
4. Custom Directives

#### Structural Directives

Structural directives are used to add or remove elements from the DOM based on a condition.

> ⚠️ **Important:** The `*` should be used with structural directives.

1. **ngFor**

   used to loop through an array of items and display each item.

  ```html
<!-- Loop over numbers -->
<ul>
  <li *ngFor="let i of [1, 2, 3, 4, 5]">{{i}}</li>
</ul>
```

```ts
  items: string[] = ['item1', 'item2', 'item3', 'item4', 'item5'];
```

```html

<ul>
  <li *ngFor="let item of items">{{item}}</li>
</ul>
```

1. **ngIf**
   used to add or remove an element from the DOM based on a condition.
   Example 1 :

```html

<div *ngIf="true">Hello World</div>
```

Example 2 :

```ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Home Component';
  showElement = true;
}
```

```html

<div *ngIf="showElement">Hello World</div>
<button (click)="showElement = !showElement">Toggle</button>
```

3. **ngSwitch**

#### Attribute Directives

Attribute directives are used to change the appearance or behavior of an element, component, or another directive.\
used as an attribute in the html tag to change look or behaviour of the element

1. **ngStyle**
   Used to change style of an element regarding a condition.

```ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Home Component';
  isRed = true;

  products = [
    {name: 'Product 1', price: 100, isAvailable: true},
    {name: 'Product 2', price: 200, isAvailable: false},
    {name: 'Product 3', price: 300, isAvailable: true},
    {name: 'Product 4', price: 400, isAvailable: false},
  ];
}
```

```html

<div [ngStyle]="{'color': 'red'}">Hello World</div>
<div [ngStyle]="{'color': isRed ? 'red' : 'blue'}">Hello World</div>

<div *ngFor="let product of products" [ngStyle]="{'color': product.isAvailable ? 'green' : 'red'}">
  {{product.name}}
</div>
```

**ngClass**

Used to add or remove a class from an element based on a condition.

```css
.addBorder {
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
}

```

```ts
export class HomeComponent {
  title = 'Home Component';
  isRed = true;
}
```

```html

<div [ngClass]="{addBorder: true}">Hello World</div>
```

#### Built-in Directives

Angular provides several built-in directives for common tasks.

1. **ngIf**
   Used to add or remove an element from the DOM based on a condition.

```html

<div *ngIf="true">Hello World</div>
```

```ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Home Component';
  showElement = true;
  searchInput = '';
}
```

```html

<div *ngIf="showElement">Hello World</div>
<input [(ngModel)]="searchInput"/>
<!-- i i want only when the searchInput is not empty to display this text <p>-->

<p *ngIf="searchInput != ''">{{searchInput}}</p>
```

### Child Component

1. **Input**

   Used to pass data from the parent component to the child component.

```ts
export class HomeComponent {
  title = 'Home Component';
  textExample = 'Hello World';
}
```

```ts
export class ChildComponent {
  @Input() text: string = '';
  @Input("example") exampleText: string = '';
}
```

```html
<!-- at the home.component.html -->
<app-child [text]="textExample"></app-child>
<app-child [example]="textExample"></app-child>
```

```html
<!-- at the child component-->
<p>{{text}}</p>
<p>{{exampleText}}</p>
```

2. **Output**

   Used to pass data from the child component to the parent component.

```ts
export class HomeComponent {
  title = 'Home Component';
  textExample = 'Hello World';
  textFromChild = '';

  onTextChange(event: any) {
    this.textFromChild = event;
  }
}
```

```html
<!-- at the parent component home.component.html -->
<app-child (textChange)="onTextChange($event)"></app-child>
<p>{{textFromChild}}</p>
```

```ts
export class ChildComponent {
  @Output() textChange = new EventEmitter<string>();
  textExample = 'Hello World';

  onTextChange() {
    this.textChange.emit(this.textExample);
  }
}
```

```html
<!-- at the child component-->
<button (click)="onTextChange()">Change Text</button>
```

### Template Reference Variables

Used to get a reference to an element in the template.

```html
<!-- at the home.component.html -->
<input #inputRef type="text"/>
<button (click)="onButtonClick(inputRef)">Click Me</button>
```

```ts
export class HomeComponent {

  onButtonClick(input: HTMLInputElement) {
    console.log(input.value);
  }
}
```

> Note: Both **`TRV`** and **`@ViewChild`** can be used to get the data in the child component.,

#### Template Reference Variables Over Components

```ts
export class ChildComponent {
  selectedCustomer: Customer = {id: 1, name: 'Customer 1'}
}
```

```html
<!-- at the app.component.html  or the parent component -->
<app-customer-list #customer></app-customer-list>
<p>you have selected this customer -> {{customer.selectedCustomer.name}}</p>
```

### @ViewChild

1. Used to access the reference item directly without passing it to a function.

2. Used to get a reference to a child component in the parent component.

### @ViewChild Over HTML Element

> ⚠️ when we used `TRV` alone we need to pass the reference to a function and get the argument like this `onButtonClick(inputRef: HTMLInputElement)`
> But when we use `@ViewChild`, We can access the html element directly without passing it to a function.

```html
<!-- at the home.component.html -->
<input #inputRef type="text"/>
<button (click)="alertViewChildData()">Click Me</button>
```

```ts
export class HomeComponent {
  @ViewChild('inputRef') inputRef!: ElementRef;

  alertViewChildData() {
    alert(this.inputRef.nativeElement.value);
  }
}
```

### @ViewChild Over Component

**Child Component**

```ts
export class ViewChildComponent {
  viewChildInput: string = '';
}
```

```html
<input type="text" [(ngModel)]="viewChildInput" placeholder="Input Text"/>

```

```html
<!-- at the home.component.html -->
<app-view-child></app-view-child>
<button (click)="alertViewChildData()">Click me</button>
```

```ts
export class HomeComponent {
  title = 'Home Component';
  //  if component we use the component class if html element we use ElementRef
  @ViewChild(ViewChildComponent) childComponent!: ViewChildComponent;

  alertViewChildData() {
    // get the data from the child component which connected to it's html using 2way data binding
    alert(this.childComponent.viewChildInput);
  }
}
```

### View Encapsulation

> ⚠️ Note: styles in **`styles.css`** will be applied to all components with `None`,`Emulated` unless it is `shadowDom` it will not apply.

Used to control the scope of the styles in the component. Types of encapsulation: **Emulated**, **None**, **ShadowDom**.

1. **Emulated**

   Css in the component will be applied to this component only.


2. **None**

   Whatever css in the parent component will be applied to the child component.

3. **ShadowDom**

   Css in the component will be applied to this component only.
   Global Css in `styles.css` will not be applied to the component.

### ng-content - Content Projection

Used to pass content from the parent component to the child component.

```html
<!-- at the home.component.html -->
<app-ng-content-test>
  <h2 class="title">Title 1 Example</h2>
  <p class="description">Description 1 Example</p>
</app-ng-content-test>
<app-ng-content-test>
  <h2 class="title">Title 1 Example</h2>
  <p class="description">Description 1 Example</p>
</app-ng-content-test>
```

```html
<!-- at the ng-content-test.component.html -->
<div>
  <ng-content select=".title"></ng-content>
  <ng-content select=".description"></ng-content>
  <button>Click</button>
</div>

```

### @ContentChild

> ⚠️💀 Used to get a reference in the child component of the item exist in the parent component in send function or projection or between selector of child component

> **Content Projection**: the content that is passed from the parent component to the child component using `ng-content`.

```html
<!--     App Component.html   -->
<!--   this #projectionContent we want to pass to the child component but directly from the parent component    -->

<app-child>
  <div #projectedContent>
    This is the projected content.
  </div>
</app-child>
```

```html
<!--  Child Component.html  -->
<p>
  Child Component
</p>
<div>
  <ng-content></ng-content>
</div>
<button (click)="logContent()">Log Content</button>
```

```ts
// Child Component.ts
@ContentChild('projectedContent')
content ? : ElementRef;


ngAfterContentInit()
{
  console.log(this.content);
}

logContent()
{
  console.log(this.content?.nativeElement.textContent);
}
```

### Custom Attribute Directive

Used to change the appearance or behavior of an element, component, or another directive.

> Because we want this directive to be used as an attribute in the html tag we need to add a `[]` square bracket before the selector.

```ts

@Directive({
  // here `[]`
  selector: '[setBackgroundRed]'
})
export class SetBackgroundRedDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'red';
    //   element.nativeElement  this return the html element
  }

}
```

```html
<p setBackgroundRed>Custom Directive</p>
```

> use OnInit to do the logic to make sure the directive has successfully initialized.

To Be Like

```html
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
```

> 🟢 You can generate a directive using the following command:
> ```shell
> ng generate directive directive-name
> ```


> 🔴 Previous we used `ElementRef` to get the element but it is not recommended to use it because it is not secure and it is not recommended to use it in the production environment.

> 🟢 Instead of using `ElementRef` we can use `Renderer2` to manipulate the DOM.

### Renderer2

Used to manipulate the DOM in a secure way.

```ts
@Directive({
  selector: '[setBackgroundRed]'
})
export class SetBackgroundRedDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    //  Add CSS style
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    // Add CSS class
    this.renderer.addClass(this.element.nativeElement, 'custom-class');
    // Set Attribute
    // Title attribute appear when hover over the element
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is a custom directive');
  }
}
```

```html
<p setBackgroundRed>Custom Directive</p>
```

### @HostListener

Used to create a attribute directive with listener like hover

```ts
@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {

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
```

```html
  <h3 appHoverDirective>@HostListener</h3>
```

### @HostBinding

The `@HostBinding`  to have a reference over css attribute then we can use it in different events using @HostListener

```ts
@Directive({
  selector: '[appBetterHover]'
})
export class BetterHoverDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  // we have reference over the background color 
  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue'
  // we have reference over the text color 
  @HostBinding('style.color') textColor: string = 'black'

  //  using the reference that we have we can apply operations on different (events) that can happen
  @HostListener('mouseover') mouseOver() {
    this.backgroundColor = 'green';
    this.textColor = 'white';
  }

  @HostListener('mouseout') mouseOut() {
    this.backgroundColor = 'blue'
    this.textColor = 'black'
  }

}
```

### Binding Directive Properties

Get a value from element where directive apply at and act regarding this value

> 🟢 Means get an argument and apply on the directive
> This done using `@Input` decorator.

```ts   
  @Directive({
  selector: '[appBindingBetterHover]'
})
export class BindingBetterHoverDirective implements OnInit {


  @Input() bgColor: string = ''

  //  Used to override and git a reference to background color of element the directive is applied to
  @HostBinding('style.backgroundColor') backgroundColor: string = this.bgColor


  ngOnInit(): void {
    //  This will get the value from the html unless it is will not work
    this.backgroundColor = this.bgColor;
  }


  // This has no relation to current example but it make hover of pink color
  @HostListener('mouseover') mouseOver() {
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseout') mouseOut() {
    this.backgroundColor = this.bgColor;
  }

}
```

```html
<!-- the attribute or the argument passed to the directive is the `'green'` -->
<p type="text" appBindingBetterHover [bgColor]="'green'">Text Example</p>
```

> 🟡 Note: both appBindingBetterHover and bgColor should be in the same element


> ### 🟢 You can pass the data in different way like this
>
> **Original**
>
> ```html
>   <p type="text" appBindingBetterHover [bgColor]="'green'" [hoverColor]="'black'">Text Example</p>
> ```
>
> **Updated**
>
> ```html
> <!-- Note the directive name is in square bracket and the value is passed to it.  -->
> <!-- Now you are passing `black` as a hover color  -->
>   <p type="text" [appBindingBetterHover]="'black'" [bgColor]="'green'">Text Example</p>
> ```
>
> ```ts
>   @Input() bgColor: string = ''
>   @Input('appBindingBetterHover') hoverColor: string = ''
> ```
>
> ### 🟢 Pass Multiple Values
>
> ```ts
> // Define a dto to pass multiple values
> interface HoverColors {
> bgColor: string;
> hoverColor: string;
> } 
> ```
>
> ```ts
> private colors: HoverColors = { bgColor: '', hoverColor: '' };
> // after we get this values we can do whatever we want like use them with @HostBinding & @HostListener
> @Input('appBindingBetterHover')
> set appBindingBetterHover(value: HoverColors) {
> this.colors = value;
> this.backgroundColor = this.colors.bgColor;
> }
>
> ```
>
> ```html
>  <p [appBindingBetterHover]="{ bgColor: 'black', hoverColor: 'red' }">Text Example</p>
> ```

### Services

Used to share data between components.
Used to write a business logic.
Used To Communicate between components.
What if we wanted two component's don't have a parent-child relationship to communicate with each other?
We can't use @Input and @Output decorators in this case.

1. **Create a Service**

    ```shell
    ng generate service javascript
    ng g s javascript
    ```

    ```ts
    export class EnrollmentService {
      OnEnrollClicked(title: string) {
        alert("Thank you for enrolling to" + title + " course.")
      }
    }
    ```

2. **Inject Service In Component**
    ```ts
    @Component({
      selector: 'app-anuglar',
      templateUrl: './angular.component.html',
      styleUrls: ['./angular.component.css'],
      providers: [EnrollmentService]
        
    })
    export class AngularComponent {
      constructor(private enrollService: EnrollmentService) {}
      OnEnroll() {this.enrollService.OnEnrollClicked("Angular")}
    }
    ```
   > Note:  we use ` providers: [EnrollmentService]` to make this service injectable to angular take instance from it.

### Hierarchical Injection

Angular will provide an instance for the component and all it's child component.

At the app component we will provide the `providers` of the service
this will make it injectable to all it's child components which used on it <example-component></ex etc...

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollmentService]

})
export class AppComponent {
}
```

> Note: the highest injection scope is the `AppModule` the instance will be available throw the **`application`** for all the **components**, **directives**, **services**, **etc...**

```ts
 @NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
 ```

### Inject Service In Another Service

@When we want to use a service inside another service we need to use `@Injectable` decorator

@e use @Injectable at the service that we want to inject another service in it

The `reciving service` should have the `@Injectable` decorator

```ts
@Injectable()
// This is the reciving service of the instance
export class EnrollmentService {
  constructor(private logService: LogService) {
  }
}
```

```ts
export class LogService {
  log(message: string) {
    console.log(message);
  }
}
```

> 🟢 **Note:**  You can can always use @Injectable at all services to make sure that it is injectable to other services

### Data Share - Event Emitter

1. Service
    ```ts
    @Injectable({
      providedIn: 'root'
    })
    export class BridgeService {
    
      constructor() {
      }
    
      users: User[] = [the list]
      userEvent = new EventEmitter<User>();
    
      sendUser(user: User) {
        this.userEvent.emit(user);
      }
    }
    
    ```

2. Sender
      ```ts
      export class SenderComponent {
        
        users = this.bridgeService.users;
        constructor(private bridgeService: BridgeService) {}
        sendUser(user: User) {this.bridgeService.sendUser(user);}
        
      }
      ```
3. Receiver
    ```ts
    export class ReceiverComponent {
      user: User = new User();
      constructor(private bridgeService: BridgeService) {
        this.bridgeService.userEvent.subscribe((user: User) => {
          this.user = user;
        });
      }
    }
    ```

### Observable

used to share data between components.

```ts
   myObservable = new Observable((observer) => {
  observer.next('Hello World');
  observer.error(new Error('Error'));
  observer.next('Hello Angular');
  observer.complete();
});
```

```ts
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

```

> 🟡 **Note:**  once .complete() or .error() is called the observable will stop emitting data.

#### Operators

1. Creating Operators
    ```ts
      // this will emit the data one by one even it was a list will emit the whole list once
    of('Hello World', 1, 2, 3, 4, 5).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
    )
    // this will emit the data one 
    from([1, 2, 3, 4, 5]).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    )
    ```

2. Transforming Operators

    ```ts
      // map operator
    of(1, 2, 3, 4, 5).pipe(
      map(data => data * 2)
    ).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    )
    ```

3. Filtering Operators

    ```ts
      // filter operator
    of(1, 2, 3, 4, 5).pipe(
      filter(data => data > 2)
    ).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    )
    ```

4. Combining Operators

    ```ts
      // combineLatest operator
    const observable1 = of('Hello');
    const observable2 = of('World');
    combineLatest(observable1, observable2).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    )
    ```
5. Error Handling Operators

    ```ts
      // catchError operator
    of('Hello World').pipe(
      map(data => { throw new Error('Error') })
    ).pipe(
      catchError(err => of('Error Handled'))
    ).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    )
    ```

#### Subject

used to share data between components exactly like EventEmitter

**Service**

```ts
@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  userEvent = new Subject<User>();

  sendUser(user: User) {
    this.userEvent.next(user);
  }
}
```

**First Component**

```ts
export class FirstComponent {
  constructor(private bridgeService: BridgeService) {
  }

  sendUser(user: User) {
    this.bridgeService.sendUser(user);
  }
}
```

**Second Component**

```ts
export class SecondComponent {

  constructor(private bridgeService: BridgeService) {
    this.bridgeService.userEvent.subscribe((user: User) => {
      console.log(this.user);
    });
  }
}
```

### Unsubscribe

Used to prevent memory leaks.

```ts
export class BridgeService {
  userEvent = new Subject<User>();
  private subscription: Subscription = new Subscription();

  sendUser(user: User) {
    this.userEvent.next(user);
  }

  subscribeUser(callback: (user: User) => void) {
    this.subscription.add(this.userEvent.subscribe(callback));
  }

  unsubscribeUser() {
    this.subscription.unsubscribe();
  }
}
```

```ts
//  also can be used to stop loading of an item 
export class SecondComponent {
  constructor(private bridgeService: BridgeService) {
    this.bridgeService.subscribeUser((user: User) => {
      console.log(user);
    });
  }

  ngOnDestroy() {
    this.bridgeService.unsubscribeUser();
  }
}
```

### Routing

Routes are used to navigate between different views or components within an application

#### 1. setting routes

```ts
// 1. Import the necessary modules
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
];

// mandatory to add RouterModule.forRoot(routes) to the imports array
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
```

> 🟢 **Note:**  we can redirect to a specific route using `redirectTo` and `pathMatch` properties

```ts
  const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
]
```

#### 2. Router Outlet

Directive tells angular where to load the component.

    ```html
    <router-outlet></router-outlet>
    ```

#### 3. RouterLink

Link to the route page without using `href="#"`.

    ```html
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
    ```


