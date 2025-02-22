import { IAppState, ISidebarState } from '@core/interfaces';
import { createSelector } from '@ngrx/store';

const selectSidebarState = (state: IAppState) => state.sidebar;

export const selectRoutes = createSelector(
  selectSidebarState,
  (state: ISidebarState) => state.routes
);
