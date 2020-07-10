import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotel-portal';
  loadingOutRouteConfig: boolean;
  routeSub: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingOutRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingOutRouteConfig = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSub != null) {
      this.routeSub.unsubscribe();
    }
  }
}
