import { createAction, props } from '@ngrx/store';
import {
  CreateChapterModel,
  UpdateChapterModel,
} from '../../../models/api/bible/chapter.model'; // TODO: update path
import { ChapterViewModel } from '../../../models/view-models/bible/chapter.view-model'; // TODO: update path
import { DataResponse } from '../../../core/models/data-response.model'; // TODO: update path

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
