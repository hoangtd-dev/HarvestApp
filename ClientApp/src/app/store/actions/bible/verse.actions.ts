import { createAction, props } from '@ngrx/store';

import { DataResponse } from '@core/models';
import { CreateVerseModel, UpdateVerseModel } from '@models/api/bible';
import { VerseViewModel } from '@models/view/bible';

export const createVerse = createAction(
  '[Verse] Create Verse',
  props<CreateVerseModel>()
);

export const updateVerse = createAction(
  '[Verse] Update Verse',
  props<UpdateVerseModel>()
);

export const loadVerses = createAction('[Verse] Load Verses');

export const updateVerseList = createAction(
  '[Verse] Update Verse List',
  props<DataResponse<VerseViewModel>>()
);
