import { createSelector } from '@ngrx/store';

import { IAppState } from '@core/interfaces';

const selectThemeState = (state: IAppState) => state.themes;

export const selectIsDarkTheme = createSelector(
  selectThemeState,
  (state) => state.isDarkTheme
);
