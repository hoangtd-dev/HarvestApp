import { createReducer, on } from '@ngrx/store';

import { DataResponse } from '@core/models';
import { VerseViewModel } from '@models/view/bible';
import { updateVerseList } from '@store/actions';

const initialState = new DataResponse<VerseViewModel>([
  {
    id: 1,
    name: 'Verse 1',
  },
  {
    id: 2,
    name: 'Verse 2',
  },
]);

export const verseReducer = createReducer(
  initialState,
  on(
    updateVerseList,
    (_state, dataResponse) =>
      ({
        data: dataResponse.data,
        totalCount: dataResponse.totalCount,
      } as DataResponse<VerseViewModel>)
  )
);
