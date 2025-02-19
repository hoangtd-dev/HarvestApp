import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs';
import { ChapterService } from '../../../services/bible/chapter.service'; // TODO: update model
import {
  createChapter,
  loadChapters,
  updateChapterList,
} from '../../actions/bible/chapter.actions'; // TODO: update model
import { DataResponse } from '../../../core/models/data-response.model'; // TODO: update model
import { ChapterViewModel } from '../../../models/view-models/bible/chapter.view-model'; // TODO: update model

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
