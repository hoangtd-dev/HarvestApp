import { ChangeDetectionStrategy, Component, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { NonAuthenticatedLayoutComponent } from './layouts/non-authenticated-layout/non-authenticated-layout.component';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    AuthenticatedLayoutComponent,
    NonAuthenticatedLayoutComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly _authService = inject(AuthService);
  public isAuthenticated: Signal<boolean> = signal(this._authService.isAuthenticated());
}
