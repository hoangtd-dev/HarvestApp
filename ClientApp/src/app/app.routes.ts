import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';

export const ROUTE_PATHS = {
  DASHBOARD: 'dashboard',
  SONGS: 'songs',
  BIBLE: 'bible',
  AUTH: 'auth',
  LOGIN: 'login',
  NOT_FOUND: 'not-found',
};

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: ROUTE_PATHS.AUTH,
    children: [
      {
        path: ROUTE_PATHS.LOGIN,
        loadComponent: () =>
          import('./core/auth/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
  {
    path: ROUTE_PATHS.DASHBOARD,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: ROUTE_PATHS.BIBLE,
    canActivate: [authGuard],
    loadComponent: () => import('./features/bible/bible.component').then((m) => m.BibleComponent),
  },
  {
    path: ROUTE_PATHS.SONGS,
    canActivate: [authGuard],
    loadComponent: () => import('./features/song/song.component').then((m) => m.SongComponent),
  },
  { path: '**', redirectTo: ROUTE_PATHS.NOT_FOUND },
];
