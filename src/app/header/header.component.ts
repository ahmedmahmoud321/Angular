import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  siteURL = window.location.href;
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




  protected readonly name = name;
}
