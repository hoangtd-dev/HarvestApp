import { Injectable } from '@angular/core';
import { BaseService } from '@core/services';
import { User } from '@models/api/auth/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  public getMe(): Observable<User> {
    // TODO: Mock data
    return of({
      id: '1',
      name: 'Hoang Tran',
      email: 'hoang@gmail.com',
      role: 'admin'
    } as User);
  }
}
