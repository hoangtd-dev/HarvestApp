import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DataResponse } from '@core/models';
import { VerseViewModel } from '@models/view/bible';

const selectVerseState =
  createFeatureSelector<DataResponse<VerseViewModel>>('verses');

export const selectAllVerses = createSelector(
  selectVerseState,
  (data) => data.data
);

export const selectAllVersesLoading = createSelector(
  selectVerseState,
  (data) => data.isLoading
);
