import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationMenuItem } from 'libs/ui/src/lib/navigation/navigation.component';

@Component({
  selector: 'mw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sandbox';

  navList: NavigationMenuItem[] = [
    {
      routerLink: '',
      name: 'Home'
    },
    {
      routerLink: 'listing',
      name: 'Listing'
    },
    {
      routerLink: 'login',
      name: 'Login'
    }
  ];

  constructor() {
  }

}

  