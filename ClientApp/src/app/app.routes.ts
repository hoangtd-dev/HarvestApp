import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { ChapterEffects, VerseEffects } from '@store/effects';
import { chapterReducer, verseReducer } from '@store/reducers';

export const ROUTE_PATHS = {
  DASHBOARD: 'dashboard',
  SONGS: 'songs',
  BIBLE: 'bible',
};


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: ROUTE_PATHS.DASHBOARD,
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: ROUTE_PATHS.BIBLE,
    loadComponent: () =>
      import('./features/bible/bible.component').then(
        (m) => m.BibleComponent
      ),
    providers: [
      provideState({ name: 'chapters', reducer: chapterReducer }),
      provideState({ name: 'verses', reducer: verseReducer }),
      provideEffects([ChapterEffects, VerseEffects]),
    ],
  },
  {
    path: ROUTE_PATHS.SONGS,
    loadComponent: () =>
      import('./features/song/song.component').then((m) => m.SongComponent),
  },
];
