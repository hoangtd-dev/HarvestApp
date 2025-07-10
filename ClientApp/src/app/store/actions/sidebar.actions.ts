import { createAction, props } from '@ngrx/store';

export const navigateTo = createAction(
  '[Sidebar] Navigate To',
  props<{ path: string }>()
);
