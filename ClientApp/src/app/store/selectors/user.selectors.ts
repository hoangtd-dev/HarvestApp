import { IAppState } from "@core/interfaces";
import { createSelector } from "@ngrx/store";

const selectUserState = (state: IAppState) => state.user;

export const authUser = createSelector(
  selectUserState,
  (user) => user
);