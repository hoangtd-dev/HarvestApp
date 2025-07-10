import {
  provideAppInitializer,
  ApplicationConfig,
  provideZoneChangeDetection,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { appReducers } from '@store/reducers';
import { ThemeService } from '@services/core';
import { AuthService } from './auth/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    provideStore(appReducers),
    provideEffects([]),

    provideAppInitializer(() => {
      inject(ThemeService);
      inject(AuthService);
    }),
  ],
};
