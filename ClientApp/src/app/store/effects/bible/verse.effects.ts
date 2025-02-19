import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { VerseService } from '../../../services/bible/verse.service'; // TODO: update model
import {
  createVerse,
  loadVerses,
  updateVerseList,
} from '../../actions/bible/verse.actions'; // TODO: update model
import { DataResponse } from '../../../core/models/data-response.model'; // TODO: update model
import { VerseViewModel } from '../../../models/view-models/bible/verse.view-model'; // TODO: update model
import { CreateVerseModel } from '../../../models/api/bible/verse.model'; // TODO: update model

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
