import { createAction, props } from '@ngrx/store';

import { DataResponse } from '@core/models';
import { CreateChapterModel, UpdateChapterModel } from '@models/api/bible';
import { ChapterViewModel } from '@models/view/bible';

export const createChapter = createAction(
  '[Chapter] Create Chapter',
  props<CreateChapterModel>()
);

export const updateChapter = createAction(
  '[Chapter] Update Chapter',
  props<UpdateChapterModel>()
);

export const loadChapters = createAction('[Chapter] Load Chapters');

export const updateChapterList = createAction(
  '[Chapter] Update Chapter List',
  props<DataResponse<ChapterViewModel>>()
);
