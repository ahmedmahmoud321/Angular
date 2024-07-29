import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'GodaDev';
  logo = 'assets/images/logo.png';
  menu = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ];


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  navigateToSolutions() {
    // this.router.navigate(['solutions'],{relativeTo: this.activatedRoute});
    this.router.navigateByUrl('solutions');

  }
}
