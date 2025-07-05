import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '@services/user/user.service';
import { loadUser } from '../actions/user.action';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class UserEffects {
  private action$ = inject(Actions);
  private userService = inject(UserService);

  // loadUser = createEffect(() => {
  //   return this.action$.pipe(
  //     ofType(loadUser),
  //     exhaustMap(() => this.userService.getMe().pipe(
  //       map()
  //     ))
  //   )
  // });
}
