import { createReducer, on } from '@ngrx/store';

import { navigateTo } from '@store/actions';
import { Route } from '@core/models';
import { ISidebarState } from '@core/interfaces';

const initialValue: ISidebarState = {
  routes: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      isActive: true,
      iconStr: 'dashboard',
    },
    {
      name: 'Songs',
      path: '/songs',
      isActive: false,
      iconStr: 'library_music',
    },
    {
      name: 'Bible',
      path: '/bible',
      isActive: false,
      iconStr: 'menu_book',
    },
  ],
};

export const sidebarReducers = createReducer(
  initialValue,
  on(navigateTo, (state, { path }) => ({
    ...state,
    routes: state.routes.map((r: Route) => ({
      ...r,
      isActive: r.path === path,
    })),
  }))
);
