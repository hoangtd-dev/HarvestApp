import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '@core/interfaces';
import { themeReducer } from './theme.reducers';

export const appReducers: ActionReducerMap<IAppState> = {
  themes: themeReducer,
};
