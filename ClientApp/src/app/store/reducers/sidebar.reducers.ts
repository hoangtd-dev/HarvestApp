import { createReducer, on } from '@ngrx/store';

import { navigateTo } from '@store/actions';
import { Route } from '@core/models';
import { ISidebarState } from '@core/interfaces';

const initialValue: ISidebarState = {
  routes: [
    {
      name: 'PPTX Generator',
      path: '/pptx-generator',
      isActive: true,
      icon: 'co_present',
    },
    {
      name: 'Configuration',
      path: '/core-configuration',
      isActive: false,
      icon: 'settings',
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
