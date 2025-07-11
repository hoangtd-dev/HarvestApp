import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Route } from '@core/models';
import { selectRoutes } from '@store/selectors';
import { navigateTo } from '@store/actions/sidebar.actions';

@Component({
  selector: 'shc-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private readonly _store = inject(Store);
  private readonly _router = inject(Router);
  public routes$: Observable<Route[]> = this._store.select(selectRoutes);

  public navigate(path: string): void {
    this._store.dispatch(navigateTo({ path }));
    this._router.navigate([path]);
  }

  public logout(): void {
    // TODO: Implement logout
    this._router.navigate(['/auth/login']);
  }
}
