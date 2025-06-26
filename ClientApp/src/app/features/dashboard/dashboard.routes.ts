import { Routes } from '@angular/router';
export default [
  {
    path: '',
    loadComponent: () => import('./dashboard.component').then((m) => m.DashboardComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard-layout/dashboard-layout.component').then(
            (m) => m.DashboardLayoutComponent
          ),
      },
    ],
  },
] as Routes;
