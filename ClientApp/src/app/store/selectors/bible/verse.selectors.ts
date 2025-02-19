import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataResponse } from '../../../core/models/data-response.model'; // TODO: Update path
import { VerseViewModel } from '../../../models/view-models/bible/verse.view-model'; // TODO: Update path

export const selectVerseState =
  createFeatureSelector<DataResponse<VerseViewModel>>('verses');

export const selectAllVerses = createSelector(
  selectVerseState,
  (data) => data.data
);

export const selectAllVersesLoading = createSelector(
  selectVerseState,
  (data) => data.isLoading
);
