import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./bible.component').then((m) => m.BibleComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./bible-dashboard/bible-dashboard.component').then(
            (m) => m.BibleDashboardComponent
          ),
      },
    ],
  },
] as Routes;
