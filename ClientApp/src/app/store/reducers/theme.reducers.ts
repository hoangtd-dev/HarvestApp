import { createReducer, on } from '@ngrx/store';

import { IThemeState } from '@core/interfaces';
import { changeTheme } from '@store/actions';

const initialState: IThemeState = { 
  isDarkTheme: false,
};

export const themeReducer = createReducer(
  initialState,
  on(changeTheme, (state) => ({ isDarkTheme: !state.isDarkTheme }))
);
