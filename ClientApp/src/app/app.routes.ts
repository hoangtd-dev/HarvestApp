import { Routes } from '@angular/router';

import { authGuard, nonAuthGuard } from './core/guards/auth.guard';
import { NonAuthenticatedLayoutComponent } from './layouts/non-authenticated-layout/non-authenticated-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [nonAuthGuard],
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: 'pptx-generator',
        loadChildren: () => import('./features/pptx-generator/pptx-generator.routes'),
      },
      {
        path: 'core-configuration',
        loadChildren: () => import('./features/core-configuration/core-configuration.routes'),
      },
    ],
  },
  { path: '**', redirectTo: 'not-found' },
];
