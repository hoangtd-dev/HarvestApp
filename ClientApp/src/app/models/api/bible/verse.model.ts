import { BaseModel } from '@core/models';

export class VerseModel extends BaseModel {
  public name: number;
}

export class CreateVerseModel {
  public name: number;
}

export class UpdateVerseModel extends CreateVerseModel {}
