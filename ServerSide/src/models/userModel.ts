export class UserModel {
  name!: string;
  email!: string;

  constructor(data: Partial<UserModel>) {
    Object.assign(this, data);
  }
}

export class UserGenericInfoModel {
  id!: number;
  name!: string;
  email!: string;

  constructor(data: Partial<UserGenericInfoModel>) {
    Object.assign(this, data);
  }
}
