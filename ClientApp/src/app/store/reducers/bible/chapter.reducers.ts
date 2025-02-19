import { createReducer, on } from '@ngrx/store';

import { DataResponse } from '@core/models';
import { ChapterViewModel } from '@models/view/bible';
import { updateChapterList } from '@store/actions';

const initialState = new DataResponse<ChapterViewModel>([
  {
    id: 1,
    name: 'Chapter 1',
  },
  {
    id: 2,
    name: 'Chapter 2',
  },
]);

export const chapterReducer = createReducer(
  initialState,
  on(
    updateChapterList,
    (_state, dataResponse) =>
      ({
        data: dataResponse.data,
        totalCount: dataResponse.totalCount,
      } as DataResponse<ChapterViewModel>)
  )
);
