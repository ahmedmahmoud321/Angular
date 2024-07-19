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

Used to get a reference to a child component in the parent component.

Child Component

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

### @ViewChild with Template Reference Variables Access Html Elements

> ⚠️ when we used `TRV` alone we need to pass the reference to a function and get the argument like this `onButtonClick(inputRef: HTMLInputElement)`
> but when we use `@ViewChild` we can access the html element directly without passing it to a function

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
  
  
   




