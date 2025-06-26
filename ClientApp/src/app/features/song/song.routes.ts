import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./song.component').then((m) => m.SongComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./song-dashboard/song-dashboard.component').then((m) => m.SongDashboardComponent),
      },
    ],
  },
] as Routes;
