import { BaseModel } from "@core/models";

export class User extends BaseModel {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}