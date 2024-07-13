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

