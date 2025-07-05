import { Routes } from '@angular/router';
export default [
  {
    path: '',
    loadComponent: () =>
      import('./core-configuration.component').then((m) => m.CoreConfigurationComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'song-configuration',
      },
      {
        path: 'song-configuration',
        loadComponent: () => import('./song/song.component').then((m) => m.SongComponent),
      },
      {
        path: 'bible-configuration',
        loadComponent: () => import('./bible/bible.component').then((m) => m.BibleComponent),
      },
    ],
  },
] as Routes;
