import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { ChapterEffects, VerseEffects } from '@store/effects';
import { chapterReducer, verseReducer } from '@store/reducers';

import { ROUTE_PATHS } from '@shared/constants';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: ROUTE_PATHS.DASHBOARD,
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: ROUTE_PATHS.BIBLE,
    loadComponent: () =>
      import('./components/bible/bible.component').then(
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
      import('./components/song/song.component').then((m) => m.SongComponent),
  },
];
