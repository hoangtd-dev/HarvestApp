import { Injectable, inject } from '@angular/core';
import { mergeMap, map } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DataResponse } from '@core/models';
import { ChapterViewModel } from '@models/view/bible';
import { ChapterService } from '@services/bible';
import { createChapter, loadChapters, updateChapterList } from '@store/actions';

@Injectable()
export class ChapterEffects {
  private readonly _action$ = inject(Actions);
  private readonly _chapterService = inject(ChapterService);

  public createChapterEffect$ = createEffect(() =>
    this._action$.pipe(
      ofType(createChapter),
      mergeMap((newChapter) =>
        this._chapterService
          .createChapter(newChapter)
          .pipe(map((id) => loadChapters()))
      )
    )
  );

  public loadChapterRequest$ = createEffect(() =>
    this._action$.pipe(
      ofType(loadChapters),
      mergeMap(() =>
        this._chapterService
          .getChapters({})
          .pipe(
            map((data: DataResponse<ChapterViewModel>) =>
              updateChapterList(data)
            )
          )
      )
    )
  );
}
