import {
  provideAppInitializer,
  ApplicationConfig,
  provideZoneChangeDetection,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { appReducers } from '@store/reducers';
import { ThemeService } from '@services/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideStore(appReducers),
    provideEffects([]),

    provideAppInitializer(() => {
      inject(ThemeService);
    }),
  ],
};
