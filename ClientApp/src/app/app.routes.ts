import { Routes } from '@angular/router';

import { authGuard, nonAuthGuard } from './core/auth/auth.guard';
import { NonAuthenticatedLayoutComponent } from './layouts/non-authenticated-layout/non-authenticated-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';

export const ROUTE_PATHS = {
  DASHBOARD: 'dashboard',
  SONGS: 'songs',
  BIBLE: 'bible',
  AUTH: 'auth',
  LOGIN: 'login',
  NOT_FOUND: 'not-found',
};

export const routes: Routes = [
  {
    path: '',
    canActivate: [nonAuthGuard],
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./core/auth/auth.component').then((m) => m.AuthComponent),
      },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes'),
      },
      {
        path: 'songs',
        loadChildren: () => import('./features/song/song.routes'),
      },
      {
        path: 'bible',
        loadChildren: () => import('./features/bible/bible.routes'),
      },
    ],
  },
  { path: '**', redirectTo: ROUTE_PATHS.NOT_FOUND },
];
