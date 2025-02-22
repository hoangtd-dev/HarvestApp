import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs';
import { Store } from '@ngrx/store';

import { navigateTo } from '@store/actions';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private _router = inject(Router);
  private _store = inject(Store);

  constructor() {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        // TODO: Implement hierarchy of routes
        let url = event.url.split('?')[0];

        if (url === '/') {
          url = '/dashboard';
        }

        this._store.dispatch(navigateTo({ path: url }));
      });
  }
}
