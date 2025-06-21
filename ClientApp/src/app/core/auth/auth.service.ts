import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated(): boolean {
    // TODO: Implement authentication check
    return true;
  }
}
