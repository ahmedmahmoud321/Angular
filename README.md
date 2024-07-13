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



