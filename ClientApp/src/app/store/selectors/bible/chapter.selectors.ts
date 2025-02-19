import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataResponse } from '../../../core/models/data-response.model'; // TODO: Update path
import { ChapterViewModel } from '../../../models/view-models/bible/chapter.view-model'; // TODO: Update path

export const selectChapterState =
  createFeatureSelector<DataResponse<ChapterViewModel>>('chapters');

export const selectAllChapters = createSelector(
  selectChapterState,
  (data) => data.data
);

export const selectAllVersesLoading = createSelector(
  selectChapterState,
  (data) => data.isLoading
);
