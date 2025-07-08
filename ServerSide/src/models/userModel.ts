export class UserModel {
  name!: string;
  email!: string;

  constructor(data: Partial<UserModel>) {
    Object.assign(this, data);
  }
}
