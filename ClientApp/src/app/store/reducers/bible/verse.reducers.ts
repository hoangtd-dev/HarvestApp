import { createReducer, on } from '@ngrx/store';
import { DataResponse } from '../../../core/models/data-response.model'; // TODO: Update path
import { VerseViewModel } from '../../../models/view-models/bible/verse.view-model'; // TODO: Update path
import { updateVerseList } from '../../actions/bible/verse.actions'; // TODO: Update path

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
