import { createAction, props } from '@ngrx/store';
import {
  CreateVerseModel,
  UpdateVerseModel,
} from '../../../models/api/bible/verse.model'; // TODO: update model
import { DataResponse } from '../../../core/models/data-response.model'; // TODO: update model
import { VerseViewModel } from '../../../models/view-models/bible/verse.view-model'; // TODO: update model

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
