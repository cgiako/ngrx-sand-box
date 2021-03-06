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
      routerLink: 'dashboard',
      name: 'Dashboard',
      icon: 'space_dashboard'
    },
    // {
    //   routerLink: 'listing',
    //   name: 'Listing',
    //   icon: 'format_list_bulleted'
    // },
    {
      routerLink: 'expenses',
      name: 'Expenses',
      icon: 'shopping_cart'
    }
  ];

}

  