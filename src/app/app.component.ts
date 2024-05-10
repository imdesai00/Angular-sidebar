import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testangular';
  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  items: NbMenuItem[] = [
    { title: 'Home', icon: 'home-outline' , link: '/home'},
    { title: 'About', icon: 'info-outline', link: '/about'},
    { title: 'Contact', icon: 'email-outline', children:[ 
      { title: 'Home', icon: 'home-outline' , link: '/home'},
      { title: 'About', icon: 'info-outline', link: '/about'}
    ] }
  ];
}
