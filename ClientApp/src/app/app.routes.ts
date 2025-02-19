import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { ChapterEffects } from './store/effects/bible/chapter.effects';
import { VerseEffects } from './store/effects/bible/verse.effects';
import { chapterReducer } from './store/reducers/bible/chapter.reducers';
import { verseReducer } from './store/reducers/bible/verse.reducers';

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
