import { Injectable } from '@angular/core';
import { BaseService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor() {
    super();
  }

  public isAuthenticated(): boolean {
    // TODO: Implement authentication check
    return true;
  }
}
