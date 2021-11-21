import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface NavigationMenuItem {
  routerLink: string;
  name: string;
}

const DEFAULT_NAVIGATION: NavigationMenuItem[] = [
  {
    routerLink: '',
    name: 'Home'
  },
];

@Component({
  selector: 'mw-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() navList: NavigationMenuItem[] = DEFAULT_NAVIGATION;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  trackByFn(): void {
  }

}
