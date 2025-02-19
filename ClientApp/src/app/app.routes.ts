import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { ChapterEffects, VerseEffects } from '@store/effects';
import { chapterReducer, verseReducer } from '@store/reducers';

export const routes: Routes = [
  {
    path: 'bible',
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
];
