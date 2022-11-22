import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean;
  constructor(private router: Router) {
    this.loading = false;

    router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loading = false;
      }
    })
  }

}
