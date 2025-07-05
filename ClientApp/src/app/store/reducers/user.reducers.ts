import { User } from '@models/api/auth/user.model';
import { createReducer, on } from '@ngrx/store';

export const userState: User | null = null;

export const userReducers = createReducer(
  userState as User | null
  // on(loginSuccess, (state) => state)
);
