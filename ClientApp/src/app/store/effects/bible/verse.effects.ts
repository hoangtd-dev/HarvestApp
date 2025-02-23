import { inject, Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DataResponse } from '@core/models';
import { CreateVerseModel } from '@models/api/bible';
import { VerseViewModel } from '@models/view/bible';
import { VerseService } from '@services/bible';
import { createVerse, loadVerses, updateVerseList } from '@store/actions';

@Injectable()
export class VerseEffects {
  private readonly _action$ = inject(Actions);
  private readonly _verseService = inject(VerseService);

  public createVerseRequest$ = createEffect(() =>
    this._action$.pipe(
      ofType(createVerse),
      mergeMap((newVerse: CreateVerseModel) =>
        this._verseService
          .createVerse(newVerse)
          .pipe(map((_id) => loadVerses()))
      )
    )
  );

  public loadVerseRequest$ = createEffect(() =>
    this._action$.pipe(
      ofType(loadVerses),
      mergeMap(() =>
        this._verseService
          .getVerses({})
          .pipe(
            map((data: DataResponse<VerseViewModel>) => updateVerseList(data))
          )
      )
    )
  );
}
