import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DataResponse } from '@core/models';
import { ChapterViewModel } from '@models/view/bible';

export const selectChapterState =
  createFeatureSelector<DataResponse<ChapterViewModel>>('chapters');

export const selectAllChapters = createSelector(
  selectChapterState,
  (data) => data.data
);

export const selectAllChapterLoading = createSelector(
  selectChapterState,
  (data) => data.isLoading
);
