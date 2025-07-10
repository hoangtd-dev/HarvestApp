import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '@core/interfaces';
import { sidebarReducers } from './sidebar.reducers';
import { themeReducer } from './theme.reducers';
import { userReducers } from './user.reducers';

export const appReducers: ActionReducerMap<IAppState> = {
  themes: themeReducer,
  sidebar: sidebarReducers,
  user: userReducers,
};
