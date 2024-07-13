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

### Directives

Directives are instructions in the DOM that extend HTML capabilities by allowing you to create custom behaviors and manipulate the DOM.

1. Structural Directives
2. Attribute Directives
3. Built-in Directives
4. Custom Directives

#### Structural Directives

Structural directives are used to add or remove elements from the DOM based on a condition.

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

2. **ngFor**
3. **ngSwitch**

#### Attribute Directives

Attribute directives are used to change the appearance or behavior of an element, component, or another directive.

1. **ngStyle**
2. **ngClass**
3. **ngModel**

#### Built-in Directives

Angular provides several built-in directives for common tasks.

1. **ngIf**
2. **ngFor**
3. **ngSwitch**
4. **ngClass**
5. **ngStyle**
6. **ngModel**



