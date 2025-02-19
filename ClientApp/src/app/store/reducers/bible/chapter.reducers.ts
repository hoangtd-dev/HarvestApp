import { createReducer, on } from '@ngrx/store';
import { updateChapterList } from '../../actions/bible/chapter.actions'; // TODO: Update path
import { DataResponse } from '../../../core/models/data-response.model'; // TODO: Update path
import { ChapterViewModel } from '../../../models/view-models/bible/chapter.view-model'; // TODO: Update path

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
